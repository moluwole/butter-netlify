<template>
    <b-navbar>
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img src="https://buttercms.com/static/v2/images/logo.fb7c1035e94d.svg">
            </b-navbar-item>
        </template>
        <template #start>
            <b-navbar-item href="#">
                Solutions
            </b-navbar-item>
            <b-navbar-item href="#">
                Features
            </b-navbar-item>
            <b-navbar-item href="#">
                    Learn
                </b-navbar-item>
                <b-navbar-item href="#">
                    Pricing
                </b-navbar-item>
                <b-navbar-item href="#">
                    Customers
                </b-navbar-item>
        </template>

        <template #end>
            <b-navbar-item tag="div">
                <div class="buttons">
                    <b-navbar-item href="#">
                        Log In
                    </b-navbar-item>
                    <a class="button yellow-button">
                        Get Started 
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style scoped>
.navbar {
    background-color: #ffffff00 !important;
    padding-top: 20px;
}

.navbar-item {
        color: #fff;
    display: block;
    line-height: 1.5;
    padding: 0.5rem 0.75rem;
    position: relative;
}

img {
    display: inline-block;
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    width: 200px;
    margin-right: 20px;
}

.yellow-button {
    background: #FED700;
    border-color: #FED700;
}
</style>