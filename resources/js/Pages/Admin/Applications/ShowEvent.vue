<template>
  <dialog-modal :show="showModal" @close="$emit('close')">
    <template #content>
      <div class="overflow-y-scroll" style="max-height: 80vh">
        <div class="py-3">
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            {{ event.event_name }}
          </h3>
          <!--           <p class="mt-1 max-w-2xl text-sm text-gray-500">
            Personal details and application.
          </p> -->
        </div>
        <div class="border-t border-gray-200 py-5 sm:p-0">
          <dl class="sm:divide-y sm:divide-gray-200">
            <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt class="text-sm font-medium text-gray-500">Ime izvrštelja</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {{ event.user_name }}
              </dd>
            </div>
            <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt class="text-sm font-medium text-gray-500">
                Email izvrštelja
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {{ event.user_email }}
              </dd>
            </div>
            <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt class="text-sm font-medium text-gray-500">
                Vrijeme izvršenja
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {{ event.created_at_full }}
              </dd>
            </div>
            <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt class="text-sm font-medium text-gray-500">Podaci</dt>
              <dd v-if="event.color == 'green'" class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <p v-for="(value, key) in createApplication">
                 <span v-if="data">
                      <span v-if="typeof value === 'object'">{{ value[type] }}: {{ data[key] }}</span>
                      <span v-else>{{ value }}: {{ data[key] }}</span>
                 </span>
                </p>
              </dd>
              <dd v-else-if="event.color == 'gray'" class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <p class="font-semibold pb-2">Stari podaci</p>
                <p v-for="(value, key) in createApplication">
                  <span v-if="data.old[key] && typeof value === 'object'">{{ value[type] }}: {{ data.old[key] }}</span>
                  <span v-if="data.old[key] && typeof value === 'string'">{{ value }}: {{ data.old[key] }}</span>
                </p>
                <p class="font-semibold py-2">Novi podaci</p>
                <p v-for="(value, key) in createApplication">
                  <span v-if="data.new[key] && typeof value === 'object'">{{ value[type] }}: {{ data.new[key] }}</span>
                  <span v-if="data.new[key] && typeof value === 'string'">{{ value }}: {{ data.new[key] }}</span>
                </p>
              </dd>
              <dd v-else-if="event.color == 'rose'" class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <p v-for="file in data">
                  <span v-if="data">{{ fileName(file) }}</span>
                </p>
              </dd>
              <dd v-else-if="event.color == 'blue'" class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <p>Datum: {{ data.payment_date}}</p>
                <p class="mt-2">Tip: {{ data.type }}</p>
                <p class="mt-2">Podtip: {{ data.sub_type }}</p>
                <p class="mt-2">Iznos: {{ data.amount }} kn</p>
              </dd>
              <dd v-else-if="event.color == 'yellow'" class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <p v-if="data.payment_date">Datum: {{ data.payment_date}}</p>
                <p class="mt-2">Tip: {{ data.type }}</p>
                <p class="font-semibold pb-2 mt-4">Stari iznos</p>
                <p class="">{{ data.old_amount }} kn</p>
                <p class="mt-2 font-semibold py-2">Novi iznos</p>
                <p class="">{{ data.new_amount }} kn</p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </template>
  </dialog-modal>
</template>

<script>
import DialogModal from "@/Shared/DialogModal";
import createApplication from '@/Menu/createApplication.js'
export default {
  emits: ["close"],
  components: {
    DialogModal,
  },
  props: {
    showModal: Boolean,
    event: Object,
    type: String
  },
  data() {
    return {
      data: null,
      createApplication: createApplication
    };
  },
  watch: {
    event(val) {
      this.data = val.data;
    },
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    fileName: function (value) {
      if (!value) return "";
      let index = value.indexOf("_");
      return value.slice(index + 1);
    },
  },
};
</script>
