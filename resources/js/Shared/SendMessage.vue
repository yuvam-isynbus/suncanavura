<template>
  <div class="relative flex space-x-3 p-4 bg-gray-100 rounded z-30">
    <div class="flex-shrink-0">
      <gravatar
        class="w-10 h-10"
        :name="$page.props.authuser.name"
        :avatar="$page.props.authuser.profile_photo_url"
      />
    </div>
    <div class="flex-1">
      <textarea
        id="message"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        @keydown="$emit('typing')"
        class="block w-full shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm border-gray-300 rounded-md"
        :class="{ 'border-red-400': error }"
      />
      <div v-if="error" class="mt-2 text-sm text-red-600">{{ error }}</div>
      <div class="flex justify-between mt-2">
        <div>
          <div class="flex">
              <DropzoneButton
              icon="paper-clip"
                  @vdropzone-success="onVdropzoneSuccess"
                  @vdropzone-removed-file="onVdropzoneRemovedFile"
                  @vdropzone-complete="onVdropzoneComplete"
                  @vdropzone-processing="onVdropzoneProcessing"
                  @vdropzone-queue-complete="onVdropzoneQueueComplete"
                  :uploading="uploading"
                />
          </div>
                <p class="mt-1 text-sm " v-for="attachment in attachments" :key="attachment.id">
                    <span>{{ attachment.file_name }}</span>
                    <span @click="removeAttachment(attachment.id)" class="ml-4 text-red-500 text-lg cursor-pointer">x</span>
                </p>
        </div>
        <div class="space-x-3">
            <button
              type="button" class="inline-flex justify-center w-full rounded-md border-2 border-rose-600 shadow-sm px-3 py-1 bg-white text-base font-semibold text-rose-600 hover:bg-rose-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 sm:w-auto sm:text-sm"
              @click="$emit('sendMessage', form.attachment_id)"
              >Pošalji poruku</button>
            <button
              type="button" class="text-gray-500 hover:text-gray-400 font-medium focus:outline-none text-sm"
              @click="cancel"
              >Odustani</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Gravatar from "@/Shared/Gravatar";
import DropzoneButton from "@/Shared/DropzoneButton";
export default {
  emits: ["cancel", "sendMessage", "update:modelValue", "typing"],
  components: {
    Gravatar,
    DropzoneButton
  },
  props: {
    modelValue: String,
    error: {
      type: String,
      default: "",
    },
  },
  data() {
      return {
        form: {
            attachments: [],
            attachment_id: null,
        },
        uploading: false,
        attachments: [],
      }
  },
    methods: {
    fileName: function (value) {
      if (!value) return "";
      let index = value.indexOf("_");
      return value.slice(index + 1);
    },
    onVdropzoneSuccess(file, response) {
      this.form.attachments.push(response.name);
    },
    onVdropzoneRemovedFile(file) {},
    onVdropzoneComplete(file) {},
    onVdropzoneProcessing(files) {
      this.uploading = true;
    },
    onVdropzoneQueueComplete() {
      this.submit();
    },
    submit() {
      this.uploading = true;
      console.log(this.form)
      axios
        .post(this.route("attachments.store"), this.form, {
          headers: {
            "X-CSRF-TOKEN": this.$page.props.csrf.token,
          },
        })
        .then((res) => {
          this.uploading = false;
          this.attachments = [...res.data.attachments]
          this.form.attachment_id = res.data.attachment_id
          this.form.attachments = [...[]];
        });
    },
    removeAttachment(mediaId) {
        axios
        .delete(this.route("attachments.destroy", mediaId), {
            '_method': 'DELETE'
        }, {
          headers: {
            "X-CSRF-TOKEN": this.$page.props.csrf.token,
          },
        })
        .then((res) => {
            var removeIndex = this.attachments.map(function(item) { return item.id; }).indexOf(res.data.media_id);
            this.attachments.splice(removeIndex, 1);
        });
    },
    cancel() {
        if (this.form.attachment_id) {
            axios
            .delete(this.route("attachment.remove",this.form.attachment_id), {
                '_method': 'DELETE'
            }, {
            headers: {
                "X-CSRF-TOKEN": this.$page.props.csrf.token,
            },
            })
            .then((res) => {
                this.form.attachment_id = null
            });
        }
        this.$emit('cancel')
    }
  },
};
</script>
