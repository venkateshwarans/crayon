def escape_string(s: str) -> str:
    return s.replace('"', '\\"').replace("\n", "\\n")
