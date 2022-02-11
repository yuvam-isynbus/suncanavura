import diference from "@/use/diference";

export default function (routeString, filterForm, defaultFilterForm) {
    function exportRoute(format) {
        const filterObject = diference(filterForm.value, defaultFilterForm)
        const query = Object.keys(filterObject)
        .map((key) => {
            if (filterObject[key]) {
            return key + "=" + encodeURIComponent(filterObject[key]);
            }
        })
        .join("&");
        // return route("admin.users.export", format) + "?" + query;
        return route(routeString, format) + "?" + query;
    }
    return exportRoute
}
