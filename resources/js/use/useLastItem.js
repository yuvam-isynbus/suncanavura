import { onMounted } from "vue";
import { Inertia } from "@inertiajs/inertia";

export default (indexRoute, items) => {

    onMounted(function () {
        let urlParams = new URLSearchParams(window.location.search);
        let page = urlParams.get("page");
        if (items?.length === 0 && page > 1) {
            Inertia.replace(
                route(indexRoute, {
                    page: page - 1,
                })
            );
        }
    });
}
