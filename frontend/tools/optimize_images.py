"""Create responsive WebP copies while preserving the original photographs."""

from pathlib import Path

from PIL import Image, ImageOps


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "images"
VARIANTS = {
    "optimized": (1920, 80),
    "thumbs": (480, 10),
}


def make_variant(source: Path, variant: str, max_edge: int, quality: int) -> None:
    relative = source.relative_to(SOURCE)
    target = SOURCE / variant / relative.with_suffix(".webp")
    target.parent.mkdir(parents=True, exist_ok=True)

    with Image.open(source) as original:
        image = ImageOps.exif_transpose(original)
        if image.mode not in ("RGB", "RGBA"):
            image = image.convert("RGB")
        image.thumbnail((max_edge, max_edge), Image.Resampling.LANCZOS)
        image.save(target, "WEBP", quality=quality, method=6)


def main() -> None:
    images = [
        path
        for path in SOURCE.rglob("*")
        if path.suffix.lower() in {".jpg", ".jpeg"}
        and "optimized" not in path.parts
        and "thumbs" not in path.parts
    ]

    for index, source in enumerate(images, start=1):
        print(f"[{index}/{len(images)}] {source.relative_to(SOURCE)}", flush=True)
        for variant, (max_edge, quality) in VARIANTS.items():
            make_variant(source, variant, max_edge, quality)


if __name__ == "__main__":
    main()
