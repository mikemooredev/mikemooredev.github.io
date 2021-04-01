import { getParameterByName } from '../utils/helpers'

import Module from './module/Module'

export default class extends Module {

  initialize() {

    this.filterPosts(this.currentTag)

  }

  setupListeners() {

    if (this.els.tagEls) {
      this.els.tagEls.forEach(tagEl => tagEl.addEventListener("click", event => this.handleTagClick(event)))
    }

  }

  handleTagClick(event) {

    event.preventDefault()

    const linkEl = event.target
    const tagHandle = linkEl.dataset.tagHandle ? linkEl.dataset.tagHandle : null

    this.filterPosts(tagHandle)

    history.pushState({}, null, linkEl.getAttribute("href"));

  }

  filterPosts(tagHandle) {
    const posts = this.postData[tagHandle] ? this.postData[tagHandle] : []
    if (this.els.itemsEl && tagHandle.length) {
      this.els.itemsEl.innerHTML = ""
      posts.forEach(post => {
        this.els.itemsEl.innerHTML += this.articleCardTemplate
          .replace(`href=""`, `href="${post.url}"`)
          .replace(`title=""`, `title="${post.title}"`)
          .replace(`src=""`, `src="${this.thumbnailPath}${post.thumbnail}"`)
          .replace(`alt=""`, `alt="${post.thumbnail_alt}"`)
          .replace(`<!--[title]-->`, post.title)
          .replace(`<!--[excerpt]-->`, post.excerpt)
      })
    }
  }

  get thumbnailPath() {
    return this.el && this.el.dataset.thumbnailPath ? this.el.dataset.thumbnailPath : ""
  }

  get articleCardTemplate() {
    return this.els.articleCardTemplateEl ? this.els.articleCardTemplateEl.innerHTML : ""
  }

  get postData() {
    return this.els.postDataEl ? JSON.parse(this.els.postDataEl.innerHTML) : {}
  }

  get currentTag() {
    return getParameterByName("tag")
  }

  get methods() {
    return [
      'handleTagClick'
    ]
  }

}