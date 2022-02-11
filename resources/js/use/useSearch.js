import { mapValues, throttle, pickBy } from "lodash";
import { ref, watch } from "vue";
import { Inertia } from "@inertiajs/inertia";

export default function useSearch(searchRoute, filter) {

    //console.log({filter})

    const setform = ref({
        search: filter.search,
    });

    function setreset() {
        setform.value = mapValues(setform.value, () => null);
    }
    watch(
        setform,
        throttle(function () {
            let query = pickBy(setform.value);
            Inertia.replace(
                route(
                    searchRoute,
                    Object.keys(query).length ? query : { remember: "forget" }
                )
            );
        }, 150),
        { deep: true }
    );

    return {
        setform,
        setreset,
    };
}
