export default class Module {

  constructor(element) {

    this.setupModule(element)

  }

  initialize() { }

  setupListeners() { }

  setupModule(element) {

    this.el = element
    this.identifier = element.dataset.module
    this.data = element.dataset
    this.els = {}

    this.bindMethods(this.defaultMethods)
    this.bindMethods(this.methods)

    this.setupEls()
    this.setupListeners()
    this.setupModel()
    this.setupInputListeners()
  }

  bindMethods(methodNames) {
    methodNames.forEach(method => {
      this[method] = this[method].bind(this)
    })
  }

  getElementAlias(element) {
    return element.dataset.el.replace(`${this.identifier}.`, "")
      .replace(/-([a-z])/g, function (m, w) {
        return w.toUpperCase();
      })
  }

  setupEls() {

    const els = this.el.querySelectorAll(`[data-el^="${this.identifier}"]`)

    els.forEach(el => {

      const alias = this.getElementAlias(el)

      const singleElAlias = `${alias}El`
      const pluralElAlias = `${singleElAlias}s`

      this.els[singleElAlias] = this.els[singleElAlias] ? this.els[singleElAlias] : el
      this.els[pluralElAlias] = typeof this.els[pluralElAlias] === "object" ? this.els[pluralElAlias] : []

      const modelEl = this.el.querySelector(`[data-model="${this.identifier}.${alias}"]`)

      if (modelEl) {
        el.modelEl = modelEl
      }

      this.els[pluralElAlias].push(el)
    })

  }

  setupModel() {
    this.model = {}
    this.elKeys
      .filter(elKey => this.inputTypes.includes(this.els[elKey].nodeName))
      .forEach(elKey => {
        this.model[this.getElementAlias(this.els[elKey])] = ""
      })
  }

  setupInputListeners() {
    this.modelElKeys
      .forEach(elKey => {

        if (this.els[elKey].modelEl) {

          this.els[elKey].addEventListener('input', ({ target }) => {
            this.model[this.getElementAlias(this.els[elKey])] = target.value
            this.els[elKey].modelEl.innerHTML = target.value
          })

        }
      })
  }

  get elKeys() {
    return Object.keys(this.els)
  }

  get modelElKeys() {
    return this.elKeys.filter(elKey => this.inputTypes.includes(this.els[elKey].nodeName))
  }

  get inputTypes() {
    return [
      'INPUT',
      'TEXTAREA'
    ]
  }

  get defaultMethods() {
    return [
      'initialize',
      'setupModule',
      'setupEls',
      'setupListeners',
      'setupInputListeners',
      'getElementAlias'
    ]
  }

  get methods() {
    return []
  }

}