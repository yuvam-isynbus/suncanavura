import { isEqual, throttle, pickBy } from 'lodash'
import { ref, watch } from 'vue'
import { Inertia } from '@inertiajs/inertia'
import _ from 'lodash'

function difference(object, base) {
  function changes(object, base) {
    return _.transform(object, function (result, value, key) {
      if (!_.isEqual(value, base[key])) {
        result[key] = (_.isObject(value) && _.isObject(base[key])) ? changes(value, base[key]) : value;
      }
    });
  }
  return changes(object, base);
}

export default function useFilter(filterRoute, filters, defaultFilterForm) {
  let obj = {}
  Object.keys(defaultFilterForm).forEach(val => {
    obj = {
      ...obj,
      ...{ [val]: filters[val] ? filters[val] : defaultFilterForm[val] },
    }
  })
  const filterForm = ref(obj)
  function resetFilterForm() {
    filterForm.value = { ...defaultFilterForm }
  }
  watch(
    filterForm,
    throttle(function () {
      // console.log(Object.assign({}, filterForm.value))
      let query = difference(filterForm.value, defaultFilterForm)
      /* let query = isEqual(
       pickBy(filterForm.value), // { search: 'ooo', godina: 'Svi' }
       pickBy(defaultFilterForm) // { search: null, godina: 'Svi' }
     )
       ? {}
       : pickBy(filterForm.value) */
      Inertia.get(filterRoute, Object.keys(query).length ? query : { remember: 'forget' }, { preserveState: true, replace: true })
      /* route(
        filterRoute,
        Object.keys(query).length ? query : { remember: 'forget' }
      ), {}, { preserveState: true, replace: true }
    ) */
    }, 150),
    { deep: true }
  )

  return {
    filterForm,
    resetFilterForm,
  }
}
