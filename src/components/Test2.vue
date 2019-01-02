<template>
  <div class="container">
    <a href="#" class="card-link" :key="index">
      <article class="blog-card" >
        <img src="https://via.placeholder.com/150" class="post-image">
        <div class="article-details">
          <h4 class="post-category">12345</h4>
          <h3 class="post-title">5678</h3>
          <p class="post-description">10111213</p>
          <p class="post-author">abcdefh</p>
        </div>
      </article>
    </a>
  </div>
</template>

<script>
import jsonData from './JsonFiles/test2'

export default {
  name: 'Test2',
  data () {
    return {
      items: []
    }
  },
  mounted () {
    this.items = jsonData
  }

}
</script>

<style scoped>
  .container {
    width: 30rem;
    height: 13.625rem;
  }
  .card-link {
    position: relative;
    display: inline;
    color: inherit;
    text-decoration: none;
    padding: 10px;
  }
  .blog-card {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
  }
  .blog-card {
    flex-direction: row;
    background: #fff;
    box-shadow: 0 0.1875rem 1.5rem rgba(0, 0, 0, 0.2);
    border-radius: 0.375rem;
    overflow: hidden;
  }
  .post-image {
    height: 100%;
  }
  .post-image {
    transition: opacity 0.3s ease;
    display: block;
    width: 100%;
    object-fit: cover;
  }
  .article-details {
    padding: 1.5rem;
  }
  .post-category {
    display: inline-block;
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 1;
    letter-spacing: 0.0625rem;
    margin: 0 0 0.75rem 0;
    padding: 0 0 0.25rem 0;
    border-bottom: 0.125rem solid #ebebeb;
  }
  .post-title {
    transition: color 0.3s ease;
    font-size: 1.125rem;
    line-height: 1.4;
    color: #121212;
    font-weight: 700;
    margin: 0 0 0.5rem 0;
  }
  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  * {
    box-sizing: border-box;
  }
</style>
