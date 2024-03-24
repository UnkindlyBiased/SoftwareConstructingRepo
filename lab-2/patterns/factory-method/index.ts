import Application from "../fabric-method/classes/Application";
import ManagerCall from "../fabric-method/classes/services/ManagerCall";
import MobileApp from "../fabric-method/classes/services/MobileApp";
import WebSite from "../fabric-method/classes/services/WebSite";

// Init of services
const site = new WebSite()
const call = new ManagerCall()
const orderApp = new MobileApp()

// Purchase of subs
const domesticSub = site.buySubscription()
const eduSub = call.buySubscription()
const premSub = orderApp.buySubscription()

const app = new Application(domesticSub)
app.useSub()

// Sub shouldn't be working, yk
domesticSub.cancelSub()
app.useSub()

app.setSub(eduSub)
app.useSub()

app.setSub(premSub)
app.useSub()
