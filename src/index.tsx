import { Application, JSX } from "typedoc";
export function load(app: Application) {
    app.renderer.hooks.on("head.end", () => (
        <script>
            <JSX.Raw html="alert('hi!');" />
        </script>
    ));
}