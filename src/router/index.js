import {createRouter, createWebHistory} from 'vue-router'
import UsersData from "@/components/UsersData";
import HelloWorld from "@/components/HelloWorld";
import WebCalculator from "@/components/WebCalculator";
import LoginPage from "@/views/LoginPage";
// 1. Define route components.
// These can be imported from other files
const Home = {template: '<div>Home</div>'}
// const About = {template: '<div>About</div>'}

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
    {path: '/', component: Home, name: 'home'},
    {path: '/helloWorld', component: HelloWorld},
    {path: '/users/:id/posts/:postId', component: UsersData },
    {path: '/web-calculator', component: WebCalculator },
    {path: '/login', component: LoginPage },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router