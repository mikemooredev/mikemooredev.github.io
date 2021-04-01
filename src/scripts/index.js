import "../styles/style.pcss";

const modules = document.querySelectorAll('[data-module]')

modules.forEach(element => {

  import(`./modules/${element.dataset.module.replace(".", "/")}`)
    .then(({ default: Module }) => {
      if (typeof Module === "function") {
        new Module(element).initialize()
      }
    }).catch((error) => {
      console.log(error)
    });
})