const icons =
  [
    {
      name: 'cat',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas'
    },
    {
      name: 'crow',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas'
    },
    {
      name: 'dog',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas'
    },
    {
      name: 'dove',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas'
    },
    {
      name: 'dragon',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas'
    },
    {
      name: 'horse',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas'
    },
    {
      name: 'hippo',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas'
    },
    {
      name: 'fish',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas'
    },
    {
      name: 'carrot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas'
    },
    {
      name: 'apple-alt',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas'
    },
    {
      name: 'lemon',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas'
    },
    {
      name: 'pepper-hot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas'
    },
    {
      name: 'user-astronaut',
      prefix: 'fa-',
      type: 'user',
      family: 'fas'
    },
    {
      name: 'user-graduate',
      prefix: 'fa-',
      type: 'user',
      family: 'fas'
    },
    {
      name: 'user-ninja',
      prefix: 'fa-',
      type: 'user',
      family: 'fas'
    },
    {
      name: 'user-secret',
      prefix: 'fa-',
      type: 'user',
      family: 'fas'
    }
  ];

const iconsContainer = document.getElementById("container")

const typeToColor = {
  "user": "purple",
  "animal": "blue",
  "vegetable": "yellow"
}

printAllIcons();
const selectElement = document.getElementById("selectElement")


selectElement.addEventListener("change", function () {
  iconsContainer.innerHTML = ""
  const allUsers = icons.filter(obj => obj.type === event.target.value)

  if (event.target.value === "all") {
    printAllIcons()
  }

  for (let i = 0; i < allUsers.length; i++) {
    const { name, prefix, family, type } = allUsers[i]
    iconsContainer.innerHTML += `<div class="icon_box">
                                    <div class="icon">
                                      <i style="color:${typeToColor[type]}" class="${family} ${prefix}${name}"></i>
                                      </div>
                                      <div class="icon_title">
                                      <h4>${name.toUpperCase()}</h4>
                                    </div>
                                  </div>`
  }
})


function printAllIcons() {
  for (let i = 0; i < icons.length; i++) {
    const { name, prefix, family, type } = icons[i]

    iconsContainer.innerHTML += `<div class="icon_box">
                                    <div class="icon">
                                      <i style="color:${typeToColor[type]}" class="${family} ${prefix}${name}"></i>
                                      </div>
                                      <div class="icon_title">
                                      <h4>${name.toUpperCase()}</h4>
                                      </div>
                                      </div>`
  }
}