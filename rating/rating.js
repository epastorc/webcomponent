import { html, LitElement, css } from 'lit-element';

class Rating extends LitElement {

  constructor() {
    super();

    this.__starsContent = '★★★★★';
    // Init properties
    this.rating = 0;
    this.colorStar ='#fc0';
    this.colorStarEmpty='#fff';
    
  }
  static get styles() {
    return css`
    :root {
        --star-size: 60px;
        --star-content: '★★★★★';
      }
      .starts-rating {
          display: inline-block;
          font-size: var(--star-size);
          line-height: 1;
        }
        .starts-rating:before {
            --percent: calc(var(--rating) / 5 * 100%);
            content: attr(data-star-content);
            letter-spacing: 3px;
            background: linear-gradient(90deg, #fc0 var(--percent), #fff var(--percent));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
      }
    `;
  }
  static get properties() {
    return {
        rating: {
        type: Number,
        attribute: 'rating'
      },
      colorStar: {
        type: String,
        attribute: 'color-star'
      },
      colorStarEmpty: {
        type: String,
        attribute: 'color-star-empty'
      },
      starsAmount: {
        type: Number,
        attribute: 'stars-number'
      }
    }
  }

convertStartAmount(starsAmount){
    return '★'.repeat(starsAmount);
}
  render() {
    return html`
    <div class="starts-rating" 
    data-star-content="${this.convertStartAmount(this.starsAmount)}"
        style="--rating: ${this.rating};
      --star-background:${this.colorStarEmpty} 
      --star-color:${this.colorStar}; ">

    `
  }
}

customElements.define('cstm-rating-stars', Rating);