<script>
// 기본 all checkbox
import weeklyCheckbox from "./checkBox.vue";
export default {
  name: "allCheckBox",
  extends: weeklyCheckbox,
  props: {
    checkedArray: {
      // 담기는 배열
      type: Array,
    },
    checkList: {
      // 기존배멸
      type: Array,
    },
  },
  watch: {
    checkedArray(value) {
      this.$emit("change", value.length === this.checkList.length);
    },
  },
  methods: {
    checkboxEvent(event) {
      if (this.checkType) {
        const t = this.checkList.filter((el) => !el.disabled);
        const updateAllCheck = event.target.checked
          ? t.map((el) => {
              return el.value;
            })
          : [];
        //prop으로 넘길 수 있는거 data도 되고, event도 되는데 ~ 여기서 넘길거 event랑 update되는 체크드되는 배열
        this.$emit("change", this.value); // 체인지 이벤트에서는 true false되는 allchecked boolean 내용
        this.$emit("update:checkedArray", updateAllCheck); //배열이 업데이트가 되면 넘어가야될 true false :: allcheck를 시킬수 있는 if문
      } else {
        const idx = this.checked.indexOf(this.value);
        if (idx === -1) {
          this.checked.push(this.value);
        } else {
          this.checked.splice(idx, 1);
        }
        this.$emit("change", this.checked);
      }
    },
  },
};
</script>
