// Tags Implementation
const wrapper_tags_include = document.querySelector("#include");
const wrapper_tags_exclude = document.querySelector("#exclude");
const tags_length = document.querySelector(".tags-length");

const populateRecipe = (id, title, ingredients, image) => {
    console.log(title, ingredients, image);

    var templateCard = document.getElementById("recipe-card-template");
    const newCard = templateCard.cloneNode(true);
    newCard.style = 'display: flex'
    newCard.querySelector(".recipe-photo").src = image;
    newCard.querySelector(".recipe-name").innerText = title;

    newCard.querySelector(".ingredient1").innerText = ingredients[0];
    newCard.querySelector(".ingredient2").innerText = ingredients[1];
    newCard.querySelector(".ingredient3").innerText = ingredients[2];

    getURL(id, (url)=>{
      newCard.querySelector("a").href = url;
    });
    

    // for(let i = 0; i < ingredients.length; i++){

    //     var templateIngredient = document.getElementById("ingredient-template");
    //     var temp = templateIngredient.cloneNode(true);

    //     temp.style = 'display: flex';
    //     temp.innerHTML = ingredients[i];
    //     console.log(temp);

    //     newCard.querySelector(".ingredients-container").append(temp);
    // }

    document.getElementById("recipe-list").append(newCard);
};

class textBox {
  tags_list = [];
  input_tag;
  wrapper_tag;
  constructor(wrapper_tag) {
    this.wrapper_tag = wrapper_tag;
    this.input_tag = wrapper_tag.querySelector(".input-tag");
    this.input_tag.addEventListener("keyup", (e) => {
      const val = this.input_tag.value;
      if (e.key == "Enter") {
        clearDropdown();
        if (this.tags_list.some((e) => e.text == val)) {
          return alert("Duplicate Tags");
        }
        if (val == "") {
          return;
        }

        const tags = val
          .split(",")
          .map((e) => e.trim())
          .filter((e) => e !== "");

        for (let i of tags) {
          this.tags_list.unshift({
            id: Math.random().toString(10).substring(2, 10),
            text: i,
          });
        }
        this.input_tag.value = "";
        this.RenderTags();
      }
    });
  }

  RenderTags() {
    let cache = "";

    this.wrapper_tag.querySelectorAll(".item-tag").forEach((e) => e.remove());
    cache = "";

    this.tags_list.forEach((e) => {
      cache = `<div class="item-tag">
                        <span>${e.text}</span>
                        <button type="button" data-id="${e.id}"
                        class="btn-rm-tag">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>`;
      this.wrapper_tag.insertAdjacentHTML("afterbegin", cache);
    });
    this.HandleRmTags();
  }

  HandleRmTags() {
    const btns = this.wrapper_tag.querySelectorAll(".btn-rm-tag");
    if (btns.length > 0) {
      btns.forEach((e) => {
        e.onclick = () => {
          const data_id = Number(e.getAttribute("data-id"));
          this.tags_list = this.tags_list.filter((x) => x.id != data_id);
          this.RenderTags();
        };
      });
    }
  }
}

const includeIngredientsTextBox = new textBox (wrapper_tags_include);
const excludeIngredientsTextBox = new textBox(wrapper_tags_exclude);
