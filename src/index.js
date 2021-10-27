import ImageUpload from "./components/image-upload.vue";

const ImageUploadVue = {
 install(Vue, options) {
  // Let's register our component globally
  // https://vuejs.org/v2/guide/components-registration.html
  Vue.component("image-upload", ImageUpload);
 }
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(ImageUploadVue);
}

export default ImageUploadVue;