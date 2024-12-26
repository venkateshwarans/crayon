from typing import Generator

from crayonai_core import GenUIResponseTextDelta


def stream_text(text: str) -> Generator[GenUIResponseTextDelta, None, None]:
    yield GenUIResponseTextDelta(text=text)
