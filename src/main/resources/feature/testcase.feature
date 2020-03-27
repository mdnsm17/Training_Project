@ProductStore
Feature: ProductStore  Website

  @TC01_ProductStore
  Scenario Outline: Signup in the ProductStore
    Given when the user launch the chrome and application
    When the user clicks on signup link
    Then the user enters <username> and <password>
    Then the user clicks signup button

    Examples: 
      | username    |  | password    |
      | sudhakar01234567 |  | sudhakar321 |

  @TC02_ProductStore
  Scenario Outline: Signup in with duplicate details in the ProductStore
    Given if the user launch the chrome and application ,duplicate
    When the user clicks on signup link ,duplicate
    Then the user enters <username>,<password> ,duplicate
    Then the user clicks signup button ,duplicate

    Examples: 
      | username           |  | password           |
      | venkateswara reddy |  | venkateswara reddy |

  @TC03_ProductStore
  Scenario: Signup without entering any details
    Given by launching the chrome and website
    When by clicking on signup link
    Then without entering username,password,click signup button

  @TC04_ProductStore
  Scenario Outline: Login in the ProductStore
    Given the user launch the chrome application
    When the user open the ProductStore Home page
    Then the user login using <username> and <password>
    Then click on the login button user nagivate to the next page

    Examples: 
      | username |  | password |
      | naveen   |  | naveen   |

  @TC05_ProductStore
  Scenario Outline: Login in the ProductStore using Invalid details
    Given if user launch the chrome application and
    When if user open the ProductStore Home page and
    Then if user login using  Invalid <username> and <password> and
    Then click on the login button, user  should not nagivate to the next page

    Examples: 
      | username |  | password  |
      | venky7   |  | venky1234 |

  @TC06_ProductStore
  Scenario: Login in the ProductStore without details
    Given when user launches the chrome application and
    When when user opens the ProductStore Home page and
    Then by clicking on the login button user  should not nagivate to the next page

  @TC07_ProductStore
  Scenario Outline: Login in the ProductStore with username only
    Given when user launches the chrome application then
    When when user opens the ProductStore Home page then
    Then by entering only <username> and clicking login button
    Then user  should not nagivate to the next page

    Examples: 
      | username |
      | naveen   |

  @TC08_ProductStore
  Scenario Outline: Login in the ProductStore with password only
    Given if user launches the chrome application then
    When if user opens the ProductStore Home page then
    Then by entering only <password> and clicking login button,
    Then user  should not nagivate to the next page,should remain in same page

    Examples: 
      | password |
      | naveen   |

  @TC09_ProductStore
  Scenario Outline: Add each item to the cart
    Given if the user launch the website and login <username> and <password> and
    When the user adds the items
    Then click on cart and check if the items ared added or not

    Examples: 
      | username |  | password |
      | naveen   |  | naveen   |

  @TC10_ProductStore
  Scenario Outline: Add all phones  to the cart
    Given if the website is launched  and  login <username> and <password> and
    When the user adds all phones
    Then click on cart and check all the phones are added or not

    Examples: 
      | username |  | password |
      | 15121036 |  | 15121036 |

  @TC11_ProductStore
  Scenario Outline: Add all laptops to the cart
    Given if the website is launched , login <username> and <password> and
    When the user adds all laptops
    Then click on cart and check all the laptops are added or not

    Examples: 
      | username |  | password |
      |   844872 |  |   844872 |

  @TC12_ProductStore
  Scenario Outline: Add all monitors to the cart
    Given if the website is launched , login <username> and <password> and then
    When the user adds all monitors
    Then click on cart and check all the monitors are added or not

    Examples: 
      | username           |  | password           |
      | venkatesh.reddy679 |  | venkatesh.reddy679 |

  @TC13_ProductStore
  Scenario Outline: Add items to the cart and place order
    Given if the user launch the website and login <username> , <password>  and
    When the user clicks on cart and  count no of items and
    Then click on place order then verify the purchase

    Examples: 
      | username |  | password |
      | naveen   |  | naveen   |

  @TC14_ProductStore
  Scenario Outline: Add all phones to the cart and place order
    Given if the user launch the website , login using <username> , <password>  and
    When the user clicks on cart and  count no of phones and
    Then click on place order and verify the purchase by checking name of customer

    Examples: 
      | username |  | password |
      | 15121036 |  | 15121036 |

  @TC15_ProductStore
  Scenario Outline: Add all laptops to the cart and place order
    Given if the user launch the website then login using <username> and <password>  and
    When the user clicks on cart and  count no of laptops and
    Then click on place order then verify the purchase by checking name of customer

    Examples: 
      | username |  | password |
      |   844872 |  |   844872 |

  @TC16_ProductStore
  Scenario Outline: Add all monitors to the cart and place order
    Given if the user launch the website and then login using <username> and <password>  and
    When the user clicks on cart and  count no of monitors and
    Then by clicking on place order then verify the purchase by checking name of customer

    Examples: 
      | username           |  | password           |
      | venkatesh.reddy679 |  | venkatesh.reddy679 |

  @TC17_ProductStore
  Scenario Outline: do not add items to the cart and place order
    Given if the user launches the website and clicks login <username> and <password> and
    When the user click on cart and  count number of items and
    Then click on place order and then  verify the purchase

    Examples: 
      | username |  | password |
      | naveen   |  | naveen   |

  @TC18_ProductStore
  Scenario Outline: enter email,name,message and click send
    Given the user launch the application and login <username> and <password> into the application
    When the user clicks the contact link
    Then the user enters contact email
    Then the user enters contact name
    Then user enters message and click submit button

    Examples: 
      | username |  | password |
      | naveen   |  | naveen   |

  @TC19_ProductStore
  Scenario Outline: enter email,name,message and click cancel
    Given if user launch the application and login <username> and <password> into the application and
    When if user clicks the contact link and
    Then if user enters contact email and
    Then if user enters contact name and
    Then user enters message then click cancel button

    Examples: 
      | username |  | password |
      | naveen   |  | naveen   |

  @TC20_ProductStore
  Scenario Outline: verify the title of the webapplication
    Given launching the application and login <username> and <password> into the application and
    When the user is on home page,take out the title and compare

    Examples: 
      | username |  | password |
      | naveen   |  | naveen   |
