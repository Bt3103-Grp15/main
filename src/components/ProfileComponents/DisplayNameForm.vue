<template>
<div class="container">
    <form @submit="onSubmit" class="change-display">
        <div class="form-control">
            <label> Display Name*</label>
            <input type="text" v-model="newName" name="newName"  :placeholder="UserName">
        </div>

    <input type="submit" value="Update"/>
    </form>
</div>

</template>

<script>

export default {
    name: "DisplayNameForm",
    props: {
        UserName: {
            type: String,
            default: "User Name" 
        },
    },

    data() {
        return {newName: "",}
    },

    methods: {
        onSubmit(e) {
            e.preventDefault()

            if (!this.newName) {
                alert("Please fill in new name")
                return 
            }

            this.$emit('change-name', this.newName)

            this.newName = ''

        }
    }
}
</script>

<style scoped>
.container {
    text-align: left;
}

.change-display {
  margin-bottom: 40px;
}
.form-control {
  margin: 20px 0;
}
.form-control label {
  display: block;
}
.form-control input {
  width: 30%;
  height: 30px;
  margin-top: 5px ;
  padding: 3px 7px;
  font-size: 17px;
}
</style>