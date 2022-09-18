<template>
  <div v-for="(value, key) in items" :key="key">
    <div class="mt-1">
      <input type="text" v-model="value.language" :key="value.index" :disabled="!value.isDisable" class="col-md-4">
      <button type="button" class="btn btn-primary col-md-2"
              data-bs-toggle="modal" data-bs-target="#staticBackdrop"
              @click="openModal(key)">
        Full Info
      </button>
    </div>
  </div>
  <InfoFull :title="infoFullData.title" :info="infoFullData.info" :id-modal="infoFullData.id"/>
  <input type="text" v-model="test">
  <button @click="saveData">
    Save form
  </button>
  <div class="text-center">
    <div>
      <div>
        <label for="hello" id="rg-from">text</label>
      </div>
      <input type="text" id="hello">
    </div>
  </div>
  <!--  <div class="mt-2 container">-->
  <!--    <div class="row">-->
  <!--      <div class="col-md-12">-->
  <!--        <input type="number" v-model="filterNumber" @keyup.enter="filterLanguages" class="col-md-2">-->
  <!--      </div>-->
  <!--      <div class="col-md-12 mt-1">-->
  <!--        <button class="btn btn-success filterButton" @click="filterLanguages"> Фильтер на {{ filterNumber }}</button>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </div>-->

  <!--  <div class="mt-10">-->
  <!--    <input type="checkbox" id="gg" @change="changeCheckedName" :checked="checked">-->
  <!--    <label for="gg">{{checked}}</label>-->
  <!--  </div>-->
  <!--  <div class="mt-10">-->
  <!--    <div>Checked names: {{ checkedNames }}</div>-->

  <!--    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">-->
  <!--    <label for="jack">Jack</label>-->

  <!--    <input type="checkbox" id="john" value="John" v-model="checkedNames">-->
  <!--    <label for="john">John</label>-->

  <!--    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">-->

  <!--    <label for="mike">Mike</label>-->
  <!--  </div>-->

  <!--  <div class="mt-10">-->
  <!--    <select v-model="selected">-->
  <!--      <option v-for="(option, index) in options" :value="option.value" :key="index">-->
  <!--        {{ option.text }}-->
  <!--      </option>-->
  <!--    </select>-->

  <!--    <select @change="changeSelected">-->
  <!--      <option v-for="(option, index) in options" :value="option.value" :key="index" :selected="selected === option.value">-->
  <!--        {{ option.text }}-->
  <!--      </option>-->
  <!--    </select>-->

  <!--    <div>Selected: {{ selected }}</div>-->
  <!--  </div>-->

  <!--  <div class="mt-10">-->
  <!--    <input type="number" v-model="first">-->
  <!--    <input type="number" v-model="second">-->
  <!--    <input type="button" @click="doSomthing" value="+">-->
  <!--    <input type="button" @click="doSomthing" value="-">-->
  <!--    {{result}}-->
  <!--    {{arraVlues}}-->
  <!--  </div>-->
  <div v-for="(savedData, key) in storeAray" :key="key">
    <div style="border: 1px solid black"> {{ key }} {{ savedData.age }}</div>
    <button @click="editData(key)">Edit</button>
  </div>
</template>

<script>
import InfoFull from "@/components/InfoFull";

export default {
  name: "WebCalculator",
  components: {
    InfoFull
  },
  data() {
    return {
      test: '',
      storeAray: [],
      first: null,
      second: null,
      result: null,
      checked: false,
      checkedNames: [],
      arraVlues: [],
      inputValue: '',
      selected: 'A',
      options: [
        {text: 'One', value: 'A'},
        {text: 'Two', value: 'B'},
        {text: 'Three', value: 'C'}
      ],
      filterNumber: 5,
      items: [],
      infoFullData: {
        title: '',
        info: [],
        id: null
      }
    }
  },
  created() {
    console.log("Created")
    this.items = [{
      index: 1,
      language: 'JavaScript',
      isDisable: true,
      infos: {
        born: 2000,
        shortInfo: "JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений."
      }
    },
      {
        index: 2,
        language: 'Php',
        isDisable: false,
        infos: {
          born: 2001,
          shortInfo: "PHP — скриптовый язык общего назначения, интенсивно применяемый для разработки веб-приложений. В настоящее время поддерживается подавляющим большинством хостинг-провайдеров и является одним из лидеров среди языков, применяющихся для создания динамических веб-сайтов."
        }
      },
      {
        index: 3,
        language: 'Python',
        isDisable: false,
        infos: {
          born: 2002,
          shortInfo: "Python — высокоуровневый язык программирования общего назначения с динамической строгой типизацией и автоматическим управлением памятью, ориентированный на повышение производительности разработчика, читаемости кода и его качества, а также на обеспечение переносимости написанных на нём программ."
        }
      },
      {
        index: 4,
        language: 'Java',
        isDisable: false,
        infos: {
          born: 2004,
          shortInfo: "Java — строго типизированный объектно-ориентированный язык программирования общего назначения, разработанный компанией Sun Microsystems. Разработка ведётся сообществом, организованным через Java Community Process; язык и основные реализующие его технологии распространяются по лицензии GPL."
        }
      }]
  },
  methods: {
    filterLanguages() {
      for (let item of this.items) {
        if (item.language.length >= this.filterNumber) {
          item.isDisable = true
        } else {
          item.isDisable = false
        }
      }
    },
    changeCheckedName() {
      this.checked = !this.checked
    },
    changeSelected(e) {
      this.selected = e.target.value
    },
    changeInputValue(e) {
      this.inputValue = e.target.value
    },
    sumValue() {
      this.result = this.first + this.second
    },
    minusValue() {
      this.result = this.second - this.first
      this.arraVlues.push(this.result)
    },
    doSomthing(e) {
      switch (e.target.value) {
        case '+':
          this.sumValue()
          break
        case '-':
          this.minusValue()
          break
      }
    },
    openModal(index) {
      this.infoFullData.title = this.items[index].language
      this.infoFullData.info = this.items[index].infos
      // console.log(this.items[index].infos)
      this.infoFullData.id = this.items[index].index
      console.log(this.infoFullData)
    },
    saveData() {
      this.storeAray.push({name: this.test, age: 21, level: 25});
    },
    editData(key) {
      this.storeAray[key].name = 'Hello'
      this.storeAray[key].age = 35
    }
  }
}
</script>

<style scoped>
#rg-from {
  text-align: left;
}
</style>