from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path


class PreviewHandler(SimpleHTTPRequestHandler):
    def send_head(self):
        # A cached timestamp from the previous server can otherwise trigger a 304.
        if "If-Modified-Since" in self.headers:
            del self.headers["If-Modified-Since"]
        return super().send_head()

    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()


if __name__ == "__main__":
    address = ("127.0.0.1", 8788)
    handler = partial(PreviewHandler, directory=Path(__file__).resolve().parent)
    with ThreadingHTTPServer(address, handler) as server:
        print("FB_Mobile preview at http://127.0.0.1:8788/", flush=True)
        server.serve_forever()
