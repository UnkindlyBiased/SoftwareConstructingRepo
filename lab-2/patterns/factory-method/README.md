# Fabric method

The following code shows an implementation of "__Fabric method__" pattern

## Abstractions (located in the *abstraction* folder)

- __Subscription__: abstract class
- __Service__: interface that defines the methods for work with MobileApp, WebSite and ManagerCall classes

## Classes: 

- Subscriptions: ```EducationalSubscription```, ```DomesticSubscription```, ```PremiumSubscription```

- ```ManagerCall```: class for purchasing educational subscription
- ```MobileApp```: class for purchasing premium subscription
- ```WebSite```: class for purchasing domestic subscription

- ```Application```: class that does some actions with subscriptions

## Utils

- ```Channel```: definition of a TV channel
