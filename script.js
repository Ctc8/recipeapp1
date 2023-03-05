

// Tags Implementation
const wrapper_tags_include = document.querySelector("#include");
const wrapper_tags_exclude = document.querySelector("#exclude");
const tags_length = document.querySelector(".tags-length");

//let tags_list_include = [];

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
