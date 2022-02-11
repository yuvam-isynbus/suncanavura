<template>
  <div
    ref="photoDropzone"
    :name="name"
    class="dropzone-vue border border-gray-300 rounded-md"
  ></div>
</template>

<script>
import Dropzone from 'dropzone'
export default {
  emits: [
    'vdropzone-files-added',
    'vdropzone-success',
    'vdropzone-removed-file',
    'vdropzone-complete',
    'vdropzone-complete-multiple',
    'vdropzone-processing',
  ],
  props: {
    name: { type: String, required: true },
    files: Array,
  },
  data: function () {
    return {
      dropzone: null,
    }
  },
  mounted() {
    let vm = this

    this.dropzone = new Dropzone(this.$refs.photoDropzone, {
      url: route('dropzone.storeMedia'),
      // maxFilesize: 20, // MB
      createImageThumbnails: true,
      addRemoveLinks: true,
      resizeWidth: 1000,
      headers: {
        //"X-CSRF-TOKEN": this.$page.csrf.token
        'X-XSRF-TOKEN': vm.getCookie('XSRF-TOKEN'),
      },
      init: function () {
        if (vm.files) {
          this.files = vm.files
          for (let i in this.files) {
            const file = Object.assign({}, this.files[i])
            const name_parts = file.file_name.split('_')
            file.name = name_parts[name_parts.length - 1]
            this.options.addedfile.call(this, file)
            this.options.thumbnail.call(this, file, file.thumbnail)
            file.previewElement.classList.add('dz-complete')
          }
        }
      },
    })

    this.dropzone.on('addedfiles', function (files) {
      vm.$emit('vdropzone-files-added', files)
    })

    this.dropzone.on('success', function (file, response) {
      const name = this.element.getAttribute('name')
      vm.$emit('vdropzone-success', file, response, name)
    })

    this.dropzone.on('removedfile', function (file) {
      const name = this.element.getAttribute('name')
      vm.$emit('vdropzone-removed-file', file, name)
    })

    this.dropzone.on('complete', function (file) {
      vm.$emit('vdropzone-complete', file)
    })

    this.dropzone.on('completemultiple', function (files) {
      vm.$emit('vdropzone-complete-multiple', files)
    })

    this.dropzone.on('processing', function (file) {
      vm.$emit('vdropzone-processing', file)
    })
  },
  methods: {
    getCookie(cname) {
      var name = cname + '='
      var decodedCookie = decodeURIComponent(document.cookie)
      var ca = decodedCookie.split(';')
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i]
        while (c.charAt(0) == ' ') {
          c = c.substring(1)
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length)
        }
      }
      return ''
    },
  },
}
</script>
