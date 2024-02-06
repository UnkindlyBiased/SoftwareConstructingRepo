import Money from "./classes/Money"
import Product from "./classes/Product"
import Warehouse from "./classes/Warehouse"
import { Category, Currency, ReporterMsgState } from "./classes/helpers/Enums"
import ReporterMsg from "./classes/helpers/ReporterMsg"

const money = new Money(12, 0.5, Currency.Dollar)
money.addAmount(120, 0)
console.log(money.moneyOutput())

const product = new Product("Milk", Category.Grocery, new Money(1, 0.3, Currency.Dollar))

const warehouse = new Warehouse()
warehouse.addProduct(product)
warehouse.getWarehouseInfo()

warehouse.addProduct(product, 3)
warehouse.getWarehouseInfo()

warehouse.getReports()