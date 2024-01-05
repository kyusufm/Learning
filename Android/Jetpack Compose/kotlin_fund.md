Kotlin fundamental

## CONDITIONAL
let you defined different behaviour

```
if statement
if (condition){
    action
}
```

#### Write conditionals in KOTLIN
How to write boolean expressions.
How to write if/else statements.
How to write when statements.
How to write if/else expressions.
How to write when expressions.
How to use commas to define common behavior for multiple branches in when conditionals.
How to use the in range to define common behavior for a range of branches in when conditionals.
How to use the is keyword to write when conditional statements.

fun main() {
    println(1 == 1)
}

##### comparison operator
Besides the == comparison operator, there are additional comparison operators that you can use to create boolean expressions:

Less than: <
Greater than: >
Less than or equal to: <=
Greater than or equal to: >=
Not equal to: !=

##### Write simple if statement
```
fun main() {
    val trafficLightColor = "Red"

    if (trafficLightColor == "Red") {
        println("Stop")
    } 
}
```

##### And Else Branch
```
fun main() {
    val trafficLightColor = "Red"

    if (trafficLightColor == "Red") {
        println("Stop")
    } else {

    }
}
```
Traffic Color
```
fun main() {
    val trafficLightColor = "Green"

    if (trafficLightColor == "Red") {
        println("Stop")
    } else {
        println("Go")
    }
}
```
Traffic Color 2
```
fun main() {
    val trafficLightColor = "Yellow"

    if (trafficLightColor == "Red") {
        println("Stop")
    } else if (trafficLightColor == "Yellow") {
        println("Slow")
    } else {
        println("Go")
    }
}
```

##### rewrite if/else statement with when
```
fun main() {
    val trafficLightColor = "Yellow"

    when (trafficLightColor) {
        "Red" -> println("Stop")
        "Yellow" -> println("Slow")
        "Green" -> println("Go")
        else -> println("Invalid traffic-light color")
    }
}
```

##### complex condition when
```
fun main() {
    val x = 3

    when (x) {
        2 -> println("x is a prime number between 1 and 10.")
        3 -> println("x is a prime number between 1 and 10.")
        5 -> println("x is a prime number between 1 and 10.")
        7 -> println("x is a prime number between 1 and 10.")
        else -> println("x isn't a prime number between 1 and 10.")
    }
}
```
##### use comma for multiple condition
```
fun main() {
    val x = 3

    when (x) {
        2, 3, 5, 7 -> println("x is a prime number between 1 and 10.")
        else -> println("x isn't a prime number between 1 and 10.")
    }
}
```
##### use in for range of condition
```
fun main() {
    val x = 4

    when (x) {
        2, 3, 5, 7 -> println("x is a prime number between 1 and 10.")
        in 1..10 -> println("x is a number between 1 and 10, but not a prime number.")
        else -> println("x isn't a prime number between 1 and 10.")
    }
}
```


##### use is to check data type
```
fun main() {
    val x: Any = 20

    when (x) {
        2, 3, 5, 7 -> println("x is a prime number between 1 and 10.")
        in 1..10 -> println("x is a number between 1 and 10, but not a prime number.")
        is Int -> println("x is an integer number, but not between 1 and 10.")
        else -> println("x isn't an integer number.")
    }
}
```

##### use if/else and when as expression
```
fun main() {
    val trafficLightColor = "Amber"

    val message = when(trafficLightColor) {
        "Red" -> "Stop"
        "Yellow", "Amber" -> "Proceed with caution."
        "Green" -> "Go"
        else -> "Invalid traffic-light color"
    }
    println(message)
}
```

###### Summary

- In Kotlin, branching can be achieved with if/else or when conditionals.
- The body of an if branch in an if/else conditional is only executed when the boolean expression inside the if branch condition returns a true value.
- Subsequent else if branches in an if/else conditional get executed only when previous if or else if branches return false values.
- The final else branch in an if/else conditional only gets executed when all previous if or else if branches return false values.
- It's recommended to use the when conditional to replace an if/else conditional when there are more than two branches.
- You can write more complex conditions in when conditionals with the comma (,), in ranges, and the is keyword.
- if/else and when conditionals can work as either statements or expressions.



## NULL VARIABLE
In Kotlin, there's a distinction between nullable and non-nullable types:

- Nullable types are variables that can hold null.
- Non-null types are variables that can't hold null.

A type is only nullable if you explicitly let it hold null. As the error message says, the String data type is a non-nullable type, so you can't reassign the variable to null.

###### ERROR 
```
fun main() {
    var favoriteActor: String = "Sandra Oh"
    favoriteActor = null
}
```

###### how to assign null
```
fun main() {
    var favoriteActor: String? = "Sandra Oh"
    println(favoriteActor)

    favoriteActor = null
    println(favoriteActor)
}

fun main() {
    var number: Int? = 10
    println(number)
    
    number = null
    println(number)
}
```

### Handle Null Variable
```
fun main() {
    var favoriteActor: String = "Sandra Oh"
    println(favoriteActor.length)
}
--> output 9
```

### !! not-null assertion operator
You can also use the !! not-null assertion operator to access methods or properties of nullable variables.

A diagram that shows a nullable variable block followed by two exclamation points, a single dot, and a method or property block. There are no spaces in between.

After the nullable variable, you need to add the !! not-null assertion operator followed by the . operator and then the method or property without any spaces.

As the name suggests, if you use the !! not-null assertion, it means that you assert that the value of the variable isn't null, regardless of whether it is or isn't.

Unlike ?. safe-call operators, the use of a !! not-null assertion operator may result in a NullPointerException error being thrown if the nullable variable is indeed null. Thus, it should be done only when the variable is always non-nullable or proper exception handling is set in place. When not handled, exceptions cause runtime errors. You learn about exception handling in later units of this course.

```
fun main() {
    var favoriteActor: String? = null
    println(favoriteActor!!.length)
}
```

This Kotlin error shows that your program crashed during execution. As such, it's not recommended to use the !! not-null assertion operator unless you're sure that the variable isn't null.

### if else null conditional 
```
fun main() {
    var favouriteActor: String? = null
    if (favouriteActor != null){
        println ("The number of characters in your favorite actor's name is ${favoriteActor.length}.")
    }else{
        println("You didnt input a name")
    }
}
```

### if else expression
```
fun main() {
    val favoriteActor: String? = "Sandra Oh"

    val lengthOfName = if(favoriteActor != null) {
      favoriteActor.length
    } else {
      0
    }

    println("The number of characters in your favorite actor's name is $lengthOfName.")
}
```

### Use the ?: Elvis operator
The ?: Elvis operator is an operator that you can use together with the ?. safe-call operator. With the ?: Elvis operator, you can add a default value when the ?. safe-call operator returns null. It's similar to an if/else expression, but in a more idiomatic way.

If the variable isn't null, the expression before the ?: Elvis operator executes. If the variable is null, the expression after the ?: Elvis operator executes.
```
fun main() {
    val favoriteActor: String? = "Sandra Oh"

    val lengthOfName = favoriteActor?.length ?: 0

    println("The number of characters in your favorite actor's name is $lengthOfName.")
}
```

###### Summary null
Summary
-  A variable can be set to null to indicate that it holds no value.
- Non-nullable variables cannot be assigned null.
- Nullable variables can be assigned null.
- To access methods or properties of nullable variables, you need to use ?. safe-call operators or !! not-null assertion operators.
- You can use if/else statements with null checks to access nullable variables in non-nullable contexts.
- You can convert a nullable variable to a non-nullable type with if/else expressions.
- You can provide a default value for when a nullable variable is null with the if/else expression or the ?: Elvis operator.

## CLASS AND OBJECT IN KOTLIN

What you'll learn
- An overview of OOP
- What classes are.
- How to define a class with constructors, functions, and properties.
- How to instantiate an object.
- What inheritance is.
- The difference between IS-A and HAS-A relationships
- How to override properties and functions.
- What visibility modifiers are.
- What a delegate is and how to use the by delegate.

What you'll build
- A smart-home class structure.
- Classes that represent smart devices, such as a smart TV and a smart light.

### 2. Define a class
When you define a class, you specify the properties and methods that all objects of that class should have.

A class definition starts with the class keyword, followed by a name and a set of curly braces. The part of the syntax before the opening curly brace is also referred to as the class header. In the curly braces, you can specify properties and functions for the class. You learn about properties and functions soon. You can see the syntax of a class definition in this diagram:

These are the recommended naming conventions for a class:
- You can choose any class name that you want, but don't use Kotlin keywords as a class name, such as the fun keyword.
- The class name is written in PascalCase, so each word begins with a capital letter and there are no spaces between the words. For example, in SmartDevice, the first letter of each word is capitalized and there isn't a space between the words.

A class consists of three major parts:

- Properties. Variables that specify the attributes of the class's objects.
- Methods. Functions that contain the class's behaviors and actions.
- Constructors. A special member function that creates instances of the class throughout the program in which it's defined.

```
class SmartDevice {
    // empty body
}

fun main() {
}
```

### 3. CREATE CLASS INSTANCE
As you learned, a class is a blueprint for an object. The Kotlin runtime uses the class, or blueprint, to create an object of that particular type. With the SmartDevice class, you have a blueprint of what a smart device is. To have an actual smart device in your program, you need to create a SmartDevice object instance.

To use an object, you create the object and assign it to a variable, similar to how you define a variable. You use the val keyword to create an immutable variable and the var keyword for a mutable variable. The val or var keyword is followed by the name of the variable, then an = assignment operator, then the instantiation of the class object.

```
fun main(){
    val smartTvDevice = new SmartDevice();
}
```

### 4. DEfine CLASS Methods

Actions that the class can perform are defined as functions in the class. For example, imagine that you own a smart device, a smart TV, or a smart light, which you can switch on and off with your mobile phone. The smart device is translated to the SmartDevice class in programming, and the action to switch it on and off is represented by the turnOn() and turnOff() functions, which enable the on and off behavior.

The syntax to define a function in a class is identical to what you learned before. The only difference is that the function is placed in the class body. When you define a function in the class body, it's referred to as a member function or a method, and it represents the behavior of the class. For the rest of this codelab, functions are referred to as methods whenever they appear in the body of a class.

```
class SmartDevice {
    fun turnOn(){
        println("turn on tv")
    }
    fun turnOff(){
        println("turn off")
    }
}
```

#### call method on object
To call a class method outside of the class, start with the class object followed by the . operator, the name of the function, and a set of parentheses. If applicable, the parentheses contain arguments required by the method. 
```
fun main() {
    val smartTvDevice = SmartDevice()
    smartTvDevice.turnOn()
    smartTvDevice.turnOff()
}
```

### 5. Define class properties 
Properties are basically variables that are defined in the class body instead of the function body. This means that the syntax to define properties and variables are identical. You define an immutable property with the val keyword and a mutable property with the var keyword.

```
class SmartDevice {

    val name = "Android TV"
    val category = "Entertainment"
    var deviceStatus = "online"

    fun turnOn(){
        println("Smart device is turned on.")
    }

    fun turnOff(){
        println("Smart device is turned off.")
    }
}

fun main(){
    val smartTvDevice = SmartDevice()
    println("Device name is: ${smartTvDevice.name}")
    smartTvDevice.turnOn()
    smartTvDevice.turnOff()
}
```

#### Getter and setter functions in properties
Kotlin properties use a backing field to hold a value in memory. A backing field is basically a class variable defined internally in the properties. A backing field is scoped to a property, which means that you can only access it through the get() or set() property functions.

To read the property value in the get() function or update the value in the set() function, you need to use the property's backing field. It's autogenerated by the Kotlin compiler and referenced with a field identifier.

For example, when you want to update the property's value in the set() function, you use the set() function's parameter, which is referred to as the value parameter, and assign it to the field variable as you can see in this code snippet:
```
var speakerVolume = 2
    set(value) {
        field = value    
    }
```

### 6. Define a constructor
The primary purpose of the constructor is to specify how the objects of the class are created. In other words, constructors initialize an object and make the object ready for use. You did this when you instantiated the object. The code inside the constructor executes when the object of the class is instantiated. You can define a constructor with or without parameters.

Default constructor
A default constructor is a constructor without parameters. You can define a default constructor as shown in this code snippet:

```
class SmartDevice constructor() {
    ...
}
```

#### parameterized constructor
```
class SmartDevice(val name: String, val category: String) {

    var deviceStatus = "online"

    fun turnOn(){
        println("Smart device is turned on.")
    }

    fun turnOff(){
        println("Smart device is turned off.")
    }
}
```

There are two main types of constructors in Kotlin:

- Primary constructor. A class can have only one primary constructor, which is defined as part of the class header. A primary constructor can be a default or parameterized constructor. The primary constructor doesn't have a body. That means that it can't contain any code.
- Secondary constructor. A class can have multiple secondary constructors. You can define the secondary constructor with or without parameters. The secondary constructor can initialize the class and has a body, which can contain initialization logic. If the class has a primary constructor, each secondary constructor needs to initialize the primary constructor.

You can use the primary constructor to initialize properties in the class header. The arguments passed to the constructor are assigned to the properties. The syntax to define a primary constructor starts with the class name followed by the constructor keyword and a set of parentheses. The parentheses contain the parameters for the primary constructor. If there's more than one parameter, commas separate the parameter definitions. 

The secondary constructor is enclosed in the body of the class and its syntax includes three parts:

- Secondary constructor declaration. The secondary constructor definition starts with the constructor keyword followed by parentheses. If applicable, the parentheses contain the parameters required by the secondary constructor.
- Primary constructor initialization. The initialization starts with a colon followed by the this keyword and a set of parentheses. If applicable, the parentheses contain the parameters required by the primary constructor.
- Secondary constructor body. Initialization of the primary constructor is followed by a set of curly braces, which contain the secondary constructor's body.

For example, imagine that you want to integrate an API developed by a smart-device provider. However, the API returns status code of Int type to indicate initial device status. The API returns a 0 value if the device is offline and a 1 value if the device is online. For any other integer value, the status is considered unknown. You can create a secondary constructor in the SmartDevice class to convert this statusCode parameter to string representation as you can see in this code snippet:

```
class SmartDevice(val name: String, val category: String) {
    var deviceStatus = "online"

    constructor(name: String, category: String, statusCode: Int) : this(name, category) {
        deviceStatus = when (statusCode) {
            0 -> "offline"
            1 -> "online"
            else -> "unknown"
        }
    }
    ...
}
```

### 7. Implement a relationship between classes
Inheritance lets you build a class upon the characteristics and behavior of another class. It's a powerful mechanism that helps you write reusable code and establish relationships between classes.

For example, there are many smart devices in the market, such as smart TVs, smart lights, and smart switches. When you represent smart devices in programming, they share some common properties, such as a name, category, and status. They also have common behaviors, such as the ability to turn them on and off.

However, the way to turn on or turn off each smart device is different. For example, to turn on a TV, you might need to turn on the display, and then set up the last known volume level and channel. On the other hand, to turn on a light, you might only need an increase or decrease to the brightness.

Also, each of the smart devices has more functions and actions that they can perform. For example, with a TV, you can adjust the volume and change the channel. With a light, you can adjust the brightness or color.

In short, all smart devices have different features, yet share some common characteristics. You can either duplicate these common characteristics to each of the smart device classes or make the code reusable with inheritance.

To do so, you need to create a SmartDevice parent class, and define these common properties and behaviors. Then, you can create child classes, such as the SmartTvDevice and SmartLightDevice classes, which inherit the properties of the parent class.

In programming terms, we say that the SmartTvDevice and SmartLightDevice classes extend the SmartDevice parent class. The parent class is also referred to as a superclass and the child class as a subclass. 

```
open class SmartDevice(val name: String, val category: String) {
    ...
}
```
The open keyword informs the compiler that this class is extendable, so now other classes can extend it.

The syntax to create a subclass starts with the creation of the class header as you've done so far. The constructor's closing parenthesis is followed by a space, a colon, another space, the superclass name, and a set of parentheses. If necessary, the parentheses include the parameters required by the superclass constructor. 

```
class SmartTvDevice(deviceName: String, deviceCategory: String) :
    SmartDevice(name = deviceName, category = deviceCategory) {

    var speakerVolume = 2
        set(value) {
            if (value in 0..100) {
                field = value
            }
        }
     var channelNumber = 1
        set(value) {
            if (value in 0..200) {
                field = value
            }
        }
    
    fun increaseSpeakerVolume() {
        speakerVolume++
        println("Speaker volume increased to $speakerVolume.")
    }

    fun nextChannel() {
        channelNumber++
        println("Channel number increased to $channelNumber.")
    }
}
```
smartlight
```
class SmartLightDevice(deviceName: String, deviceCategory: String) :
    SmartDevice(name = deviceName, category = deviceCategory) {

    var brightnessLevel = 0
        set(value) {
            if (value in 0..100) {
                field = value
            }
        }

    fun increaseBrightness() {
        brightnessLevel++
        println("Brightness increased to $brightnessLevel.")
    }
}
```

#### Relationships between classes
When you use inheritance, you establish a relationship between two classes in something called an IS-A relationship. An object is also an instance of the class from which it inherits. In a HAS-A relationship, an object can own an instance of another class without actually being an instance of that class itself. 

##### IS-A relationships
When you specify an IS-A relationship between the SmartDevice superclass and SmartTvDevice subclass, it means that whatever the SmartDevice superclass can do, the SmartTvDevice subclass can do. The relationship is unidirectional, so you can say that every smart TV is a smart device, but you can't say that every smart device is a smart TV. The code representation for an IS-A relationship is shown in this code snippet:
```
// Smart TV IS-A smart device.
class SmartTvDevice : SmartDevice() {
}
```

Don't use inheritance only to achieve code reusability. Before you decide, check whether the two classes are related to each other. If they exhibit some relationship, check whether they really qualify for the IS-A relationship. Ask yourself, "Can I say a subclass is a superclass?". For example, Android is an operating system.

#### HAS-A relationships
A HAS-A relationship is another way to specify the relationship between two classes. For example, you will probably use the smart TV in your home. In this case, there's a relationship between the smart TV and the home. The home contains a smart device or, in other words, the home has a smart device. The HAS-A relationship between two classes is also referred to as composition.

So far, you created a couple of smart devices. Now, you create the SmartHome class, which contains smart devices. The SmartHome class lets you interact with the smart devices.

```
// The SmartHome class HAS-A smart TV device.
class SmartHome(val smartTvDevice: SmartTvDevice) {

}
```

```
class SmartHome(
    val smartTvDevice: SmartTvDevice,
    val smartLightDevice: SmartLightDevice
) {

    ...

    fun changeTvChannelToNext() {
        smartTvDevice.nextChannel()
    }

    fun turnOnLight() {
        smartLightDevice.turnOn()
    }

    fun turnOffLight() {
        smartLightDevice.turnOff()
    }

    fun increaseLightBrightness() {
        smartLightDevice.increaseBrightness()
    }

    ////
    fun turnOffAllDevices() {
        turnOffTv()
        turnOffLight()
    }
}
```

#### Override superclass methods from subclasses
As discussed earlier, even though the turn-on and turn-off functionality is supported by all the smart devices, the way in which they perform the functionality differs. To provide this device-specific behavior, you need to override the turnOn() and turnOff() method defined in the superclass. To override means to intercept the action, typically to take manual control. When you override a method, the method in the subclass interrupts the execution of the method defined in the superclass and provides its own execution.

```
class SmartTvDevice(name: String, category: String) :
    SmartDevice(name = name, category = category) {

    var speakerVolume = 2
        set(value) {
            if (value in 0..100) {
                field = value
            }
        }
    var channelNumber = 1
        set(value) {
            if (value in 0..200) {
                field = value
            }
        }

    override fun turnOn() {
        deviceStatus = "on"
        println(
            "$name is turned on. Speaker volume is set to $speakerVolume and channel number is " +
                "set to $channelNumber."
        )
    }

    override fun turnOff() {
        deviceStatus = "off"
        println("$name turned off")
    }

    fun increaseSpeakerVolume() {
        speakerVolume++
        println("Speaker volume increased to $speakerVolume.")
    }

    fun nextChannel() {
        channelNumber++
        println("Channel number increased to $channelNumber.")
    }
}
```

```
fun main(){
    var smartDevice : SmartDevice = SmartTvDevice("Android TV", "Entertainment")
    smartDevice.turnOn()

    smartDevice = SmartLightDevice("Google Light", "Utility")
    smartDevice.turnOn()
}
```

#### Reuse superclass code in subclasses with the super keyword
When you take a close look at the turnOn()and turnOff() methods, you notice that there's similarity in how the deviceStatus variable is updated whenever the methods are called in the SmartTvDevice and SmartLightDevice subclasses: the code duplicates. You can reuse the code when you update the status in the SmartDevice class.

To call the overridden method from the superclass, you need to use the super keyword. Calling a method from the superclass is similar to calling the method from outside the class. Instead of using a . operator between the object and method, you need to use the super keyword, which informs the Kotlin compiler to call the method on the superclass instead of the subclass.

The syntax to call the method from the superclass starts with a super keyword followed by the . operator, function name, and a set of parentheses. If applicable, the parentheses include the arguments. 
```
class SmartTvDevice(name: String, category: String) :
    SmartDevice(name = name, category = category) {

    var speakerVolume = 2
        set(value) {
            if (value in 0..100) {
                field = value
            }
        }
     var channelNumber = 1
        set(value) {
            if (value in 0..200) {
                field = value
            }
        }

    override fun turnOn() {
        super.turnOn()
        println("Smart TV turned on. Speaker volume set to $speakerVolume.")
    }

    override fun turnOff() {
        super.turnOff()
        println("Smart TV turned off")
    }

    fun increaseSpeakerVolume() {
        speakerVolume++
        println("Speaker volume increased to $speakerVolume.")
    }

    fun nextChannel() {
        channelNumber++
    }

    fun previousChannel() {
        channelNumber--
    }
}


```
```
class SmartLightDevice(name: String, category: String) :
    SmartDevice(name = name, category = category) {

    var brightnessLevel = 0

    override fun turnOn() {
        super.turnOn()
        brightnessLevel = 2
        println("Smart Light turned on. The brightness level is $brightnessLevel.")
    }

    override fun turnOff() {
        super.turnOff()
        brightnessLevel = 0
        println("Smart Light turned off")
    }

    fun increaseBrightness() {
        brightnessLevel++
    }
}
```

#### Override superclass properties from subclasses
Similar to methods, you can also override properties with the same steps.

```
class SmartLightDevice(deviceName: String, deviceCategory: String) :
    SmartDevice(name = deviceName, category = deviceCategory) {

    ...
    override val deviceType = "Smart Light"
    ...

}
```

### 8. Visibility modifiers
Visibility modifiers play an important role to achieve encapsulation:

In a class, they let you hide your properties and methods from unauthorized access outside the class.
In a package, they let you hide the classes and interfaces from unauthorized access outside the package.
Kotlin provides four visibility modifiers:

- public. Default visibility modifier. Makes the declaration accessible everywhere. The properties and methods that you want used outside the class are marked as public.
- private. Makes the declaration accessible in the same class or source file.
There are likely some properties and methods that are only used inside the class, and that you don't necessarily want other classes to use. These properties and methods can be marked with the private visibility modifier to ensure that another class can't accidentally access them.

protected. Makes the declaration accessible in subclasses. The properties and methods that you want used in the class that defines them and the subclasses are marked with the protected visibility modifier.
internal. Makes the declaration accessible in the same module. The internal modifier is similar to private, but you can access internal properties and methods from outside the class as long as it's being accessed in the same module.

When you define a class, it's publicly visible and can be accessed by any package that imports it, which means that it's public by default unless you specify a visibility modifier. Similarly, when you define or declare properties and methods in the class, by default they can be accessed outside the class through the class object. It's essential to define proper visibility for code, primarily to hide properties and methods that other classes don't need to access.

For example, consider how a car is made accessible to a driver. The specifics of what parts comprise the car and how the car works internally are hidden by default. The car is intended to be as intuitive to operate as possible. You wouldn't want a car to be as complex to operate as a commercial aircraft, similar to how you wouldn't want another developer or your future self to be confused as to what properties and methods of a class are meant to be used.

Visibility modifiers help you surface the relevant parts of the code to other classes in your project and ensure that the implementation can't be unintentionally used, which makes for code that's easy to understand and less prone to bugs.

```
class SmartHome(
    val smartTvDevice: SmartTvDevice,
    val smartLightDevice: SmartLightDevice
) {

    var deviceTurnOnCount = 0
        private set

    fun turnOnTv() {
        deviceTurnOnCount++
        smartTvDevice.turnOn()
    }

    fun turnOffTv() {
        deviceTurnOnCount--
        smartTvDevice.turnOff()
    }
    
    ...

    fun turnOnLight() {
        deviceTurnOnCount++
        smartLightDevice.turnOn()
    }

    fun turnOffLight() {
        deviceTurnOnCount--
        smartLightDevice.turnOff()
    }

    ...

}
```

#### Visibility modifiers for methods
The syntax to specify a visibility modifier for a method starts with the private, protected, or internal modifiers followed by the syntax that defines a method. You can see the syntax in this diagram:
```
class SmartTvDevice(deviceName: String, deviceCategory: String) :
    SmartDevice(name = deviceName, category = deviceCategory) {

    ...
    protected fun nextChannel() {
        channelNumber++
    }      
    ...
}
```

#### Visibility modifiers for constructors
The syntax to specify a visibility modifier for a constructor is similar to defining the primary constructor with a couple of differences:

- The modifier is specified after the class name, but before the constructor keyword.
- If you need to specify the modifier for the primary constructor, it's necessary to keep the constructor keyword and parentheses even when there aren't any parameters.

For example, you can see how to add a protected modifier to the SmartDevice constructor in this code snippet:

```
open class SmartDevice protected constructor (val name: String, val category: String) {

    ...

}
```

#### Visibility modifiers for classes
The syntax to specify a visibility modifier for a class starts with the private, protected, or internal modifiers followed by the syntax that defines a class. 

For example, you can see how to specify an internal modifier for the SmartDevice class in this code snippet:


internal open class SmartDevice(val name: String, val category: String) {

    ...

}
Ideally, you should strive for strict visibility of properties and methods, so declare them with the private modifier as often as possible. If you can't keep them private, use the protected modifier. If you can't keep them protected, use the internal modifier. If you can't keep them internal, use the public modifier.

Specify appropriate visibility modifiers
This table helps you determine the appropriate visibility modifiers based on where the property or methods of a class or constructor should be accessible:

Modifier

Accessible in same class

Accessible in subclass

Accessible in same module

Accessible outside module

private

✔

𝗫

𝗫

𝗫

protected

✔

✔

𝗫

𝗫

internal

✔

✔

✔

𝗫

public

✔

✔

✔

✔

In the SmartTvDevice subclass, you shouldn't allow the speakerVolume and channelNumber properties to be controlled from outside the class. These properties should be controlled only through the increaseSpeakerVolume() and nextChannel() methods.

Similarly, in the SmartLightDevice subclass, the brightnessLevel property should be controlled only through the increaseLightBrightness() method.

### 9. Define property delegates
You learned in the previous section that properties in Kotlin use a backing field to hold their values in memory. You use the field identifier to reference it.

When you look at the code so far, you can see the duplicated code to check whether the values are within range for the speakerVolume, channelNumber, and brightnessLevel properties in the SmartTvDevice and SmartLightDevice classes. You can reuse the range-check code in the setter function with delegates. Instead of using a field, and a getter and setter function to manage the value, the delegate manages it.

The syntax to create property delegates starts with the declaration of a variable followed by the by keyword, and the delegate object that handles the setter and getter functions for the property.

Before you implement the class to which you can delegate the implementation, you need to be familiar with interfaces. An interface is a protocol to which classes that implement it need to adhere. It focuses on what to do instead of how to do the action. In short, an interface helps you achieve abstraction.

For example, before you build a house, you inform the architect about what you want. You want a bedroom, kid's room, living room, kitchen, and a couple of bathrooms. In short, you specify what you want and the architect specifies how to achieve it. 

You already learned how to extend a class and override its functionality. With interfaces, the class implements the interface. The class provides implementation details for the methods and properties declared in the interface. You'll do something similar with the ReadWriteProperty interface to create the delegate. You learn more about interfaces in the next unit.

To create the delegate class for the var type, you need to implement the ReadWriteProperty interface. Similarly, you need to implement the ReadOnlyProperty interface for the val type.

```
class RangeRegulator(
    initialValue: Int,
    private val minValue: Int,
    private val maxValue: Int
) : ReadWriteProperty<Any?, Int> {
    var fieldData = initialValue

    override fun getValue(thisRef: Any?, property: KProperty<*>): Int {
        return fieldData
    }

    override fun setValue(thisRef: Any?, property: KProperty<*>, value: Int) {
        if (value in minValue..maxValue) {
            fieldData = value
        }
    }
}
```
```
class SmartTvDevice(deviceName: String, deviceCategory: String) :
    SmartDevice(name = deviceName, category = deviceCategory) {

    var speakerVolume by RangeRegulator(initialValue = 0, minValue = 0, maxValue = 100)

    var channelNumber by RangeRegulator(initialValue = 1, minValue = 0, maxValue = 200)

    ...
}
```
```
class SmartLightDevice(deviceName: String, deviceCategory: String) :
    SmartDevice(name = deviceName, category = deviceCategory) {

    var brightnessLevel by RangeRegulator(initialValue = 2, minValue = 0, maxValue = 100)
    
    ...

}
```
### 9 SOLUTION

```
import kotlin.properties.ReadWriteProperty
import kotlin.reflect.KProperty

open class SmartDevice(val name: String, val category: String) {

    var deviceStatus = "online"
        protected set

    open val deviceType: String = "unknown"

    open fun turnOn() {
        deviceStatus = "on"
    }

    open fun turnOff() {
        deviceStatus = "off"
    }
}

class SmartTvDevice(deviceName: String, deviceCategory: String) :
    SmartDevice(name = deviceName, category = deviceCategory) {

    override val deviceType: String = "Smart TV"

    private var speakerVolume by RangeRegulator(initialValue = 2, minValue = 0, maxValue = 100)
    private var channelNumber by RangeRegulator(initialValue = 1, minValue = 0, maxValue = 200)

    override fun turnOn() {
        super.turnOn()
        println(
            "$name is turned on. Speaker volume set to $speakerVolume and channel number is " +
                "set to $channelNumber."
        )
    }

    override fun turnOff() {
        super.turnOff()
        println("$name turned off")
    }

    fun increaseSpeakerVolume() {
        speakerVolume++
        println("Speaker volume increased to $speakerVolume.")
    }

    fun nextChannel() {
        channelNumber++
        println("Channel number increased to $channelNumber.")
    }
}

class SmartLightDevice(deviceName: String, deviceCategory: String) :
    SmartDevice(name = deviceName, category = deviceCategory) {

    override val deviceType: String = "Smart Light"
    private var brightnessLevel by RangeRegulator(initialValue = 2, minValue = 0, maxValue = 100)

    override fun turnOn() {
        super.turnOn()
        brightnessLevel = 2
        println("$name is turned on. The brightness level is $brightnessLevel.")
    }

    override fun turnOff() {
        super.turnOff()
        brightnessLevel = 0
        println("$name turned off")
    }

    fun increaseBrightness() {
        brightnessLevel++
        println("Brightness increased to $brightnessLevel.")
    }
}

class SmartHome(val smartTvDevice: SmartTvDevice, val smartLightDevice: SmartLightDevice) {

    var deviceTurnOnCount = 0
        private set

    fun turnOnTv() {
        deviceTurnOnCount++
        smartTvDevice.turnOn()
    }

    fun turnOffTv() {
        deviceTurnOnCount--
        smartTvDevice.turnOff()
    }

    fun increaseTvVolume() {
        smartTvDevice.increaseSpeakerVolume()
    }

    fun changeTvChannelToNext() {
        smartTvDevice.nextChannel()
    }

    fun turnOnLight() {
        deviceTurnOnCount++
        smartLightDevice.turnOn()
    }

    fun turnOffLight() {
        deviceTurnOnCount--
        smartLightDevice.turnOff()
    }

    fun increaseLightBrightness() {
        smartLightDevice.increaseBrightness()
    }

    fun turnOffAllDevices() {
        turnOffTv()
        turnOffLight()
    }
}

class RangeRegulator(
    initialValue: Int,
    private val minValue: Int,
    private val maxValue: Int
) : ReadWriteProperty<Any?, Int> {

    private var fieldData = initialValue

    override fun getValue(thisRef: Any?, property: KProperty<*>): Int {
        return fieldData
    }

    override fun setValue(thisRef: Any?, property: KProperty<*>, value: Int) {
        if (value in minValue..maxValue) {
            fieldData = value
        }
    }
}

fun main() {
    val smartHome = SmartHome(
        SmartTvDevice(deviceName = "Android TV", deviceCategory = "Entertainment"),
        SmartLightDevice(deviceName = "Google light", deviceCategory = "Utility")
    )

    smartHome.turnOnTv()
    smartHome.turnOnLight()
    println("Total number of devices currently turned on: ${smartHome.deviceTurnOnCount}")
    println()

    smartHome.increaseTvVolume()
    smartHome.changeTvChannelToNext()
    smartHome.increaseLightBrightness()
    println()

    smartHome.turnOffAllDevices()
    println("Total number of devices currently turned on: ${smartHome.deviceTurnOnCount}.")
}
```

### 10. CHallenge
- In the SmartDevice class, define a printDeviceInfo() method that prints a "Device name: $name, category: $category, type: $deviceType" string.
- In the SmartTvDevice class, define a decreaseVolume() method that decreases the volume and a previousChannel() method that navigates to the previous channel.
- In the SmartLightDevice class, define a decreaseBrightness() method that decreases the brightness.
- In the SmartHome class, ensure that all actions can only be performed when each device's deviceStatus property is set to an "on" string. Also, ensure that the deviceTurnOnCount property is updated correctly.
After you're done with the implementation:

- In the SmartHome class, define an decreaseTvVolume(), changeTvChannelToPrevious(), printSmartTvInfo(), printSmartLightInfo(), and decreaseLightBrightness() method.
- Call the appropriate methods from the SmartTvDevice and SmartLightDevice classes in the SmartHome class.
- In the main() function, call these added methods to test them.


### 12. Conclusion
Congratulations! You learned how to define classes and instantiate objects. You also learned how to create relations between classes and create property delegates.

Summary
- There are four main principles of OOP: encapsulation, abstraction, inheritance, and polymorphism.
- Classes are defined with the class keyword, and contain properties and methods.
- Properties are similar to variables except properties can have custom getters and setters.
- A constructor specifies how to instantiate objects of a class.
- You can omit the constructor keyword when you define a primary constructor.
- Inheritance makes it easier to reuse code.
- The IS-A relationship refers to inheritance.
- The HAS-A relationship refers to composition.
- Visibility modifiers play an important role in the achievement of encapsulation.
- Kotlin provides four visibility modifiers: the public, private, protected, and internal modifiers.
- A property delegate lets you reuse the getter and setter code in multiple classes.