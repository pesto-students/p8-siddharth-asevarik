### 1.When a user enters an URL in the browser, how does the browser fetch the desiredresult ? Explain this with the below in mind and Demonstrate this by drawing a diagramfor the same.
#### 1. What is the main functionality of the browser?
#### 2. High Level Components of a browser.
#### 3. Rendering engine and its use.
#### 4. Parsers (HTML, CSS, etc)
#### 5. Script Processors
#### 6. Tree constructiong and Order of script processing
#### 7. Layout and Painting


# Solution
Before Answering this Question there's a few things terms one should keep in mind
## 1. Browser:-  
An application program that provides a way to look at and interact with all the information on the World Wide Web. This includes Web pages, videos and images.

## 2. Uniform Resource Locator:-
It is an address of the place where we want to go to interact with or find information.

# Anatomy of URL:
![Anatomy url](https://doepud.co.uk/images/basic-url.svg)

Now with is kept in mind let's answer the question
the process of retriving a data and displays it to user involves four steps

 
# Step-1
After hitting the URL the first thing that needs to happen is to resolve IP address associated with the domain name.This is handled by Networking compotent of the browser which is responsible for making **HTTP** requests. DNS helps in resolving this.DNS is like phonebook where domain names along with there corresponding ip addresses are kept 

![DNS layers Overview](https://www.freecodecamp.org/news/content/images/2019/06/dns.png)

this is an overview but there are 4 layers through which domain name is resolved:

1. After Hitting the Url, the **Browser Cache** is checked.It is the Entry point where the query first runs.
1. The second place where DNS query runs in **OS cache** followed by **router cahe**
1. if in the above steps still the query is not resolved then DNS query goes to ISP's(Internet Service Provider) **resolver server** (the query runs in ISP cache)
1. if in 3rd step still the query is not resolved then it goes to **top or root server** of the DNS hierarchy.There it never happens when the query is not resolved.
1. Now,resolver asks the TLD server to give IP address of our domain name. TLD stores address information of domain name.It tells the resolver to ask it to **Authoritative Name server**
1. The authoritative name server is responsible for knowing everything about the domain name. Finally, resolver (ISP) gets the IP address associated with the domain name and sends it back to the browser.

After getting IP address,resolver server stores this IP address in it's cache for future refrences.

![DNS IP resolvered](https://www.freecodecamp.org/news/content/images/2019/06/dns_resolve.png)

# Step -2
Once IP address is obtained browser initiates connection with it.
To communicate over the network, internet protocol is followed. TCP/IP is most common protocol. A connection is built between two using a process called ‘TCP 3-way handshake’. Let’s understand the process in brief:

1. A client computer sends a SYN message means, whether second computer is open for new connection or not.

1. Then another computer, if open for new connection, it sends acknowledge message with SYN message as well.

1. After this, first computer receives its message and acknowledge by sending an ACK message.

   To better  understand, look below diagram.
![tcp communication](https://www.freecodecamp.org/news/content/images/2019/06/process.png)

# Step-3
Finally, the connection is built between client and server. Now, they both can communicate with each other and share information. After successful connection, browser (client) sends a request to a server that I want this content. The server knows everything of what response it should send for every request. Hence, the server responds back. This response contains every information that you requested like web page, status-code, cache-control, etc. Now, the browser renders the content that has been requested.

# Step-4 
Once browser is recieved the data it goes to different components of the browser

![browser components](https://web-dev.imgix.net/image/T4FyVKpzu4WKF1kBNvXepbi08t52/PgPX6ZMyKSwF6kB8zIhB.png?auto=format&w=500)

### 1. The user interface: 
This includes the address bar, back/forward button, bookmarking menu, etc. Every part of the browser display except the window where you see the requested page.
### 2. The browser engine: 
 Marshals actions between the UI and the rendering engine.
### 3. Networking: 
For network calls such as HTTP requests, using different implementations for different platform behind a platform-independent interface.
### 4.UI backend: 
Used for drawing basic widgets like combo boxes and windows. This backend exposes a generic interface that is not platform specific. Underneath it uses operating system user interface methods.
#### 5.JavaScript interpreter: 
Used to parse and execute JavaScript code.
#### 6.Data storage. 
This is a persistence layer. The browser may need to save all sorts of data locally, such as cookies. Browsers also support storage mechanisms such as localStorage, IndexedDB, WebSQL and FileSystem.

### 7. The rendering engine: 
Responsible for displaying requested content. For example if the requested content is HTML, the rendering engine parses HTML and CSS, and displays the parsed content on the screen. Different Browsers ise Different rendering engines like **safari** uses **webkit**,chrome and opera uses **Blink**,Firefox uses **Gekco**

## The main flow
![rendering flow](https://web-dev.imgix.net/image/T4FyVKpzu4WKF1kBNvXepbi08t52/bPlYx9xODQH4X1KuUNpc.png?auto=format&w=650)

1. The rendering engine will start parsing the HTML document and convert elements to DOM nodes in a tree called the "content tree". The engine will parse the style data, both in external CSS files and in style elements. Styling information together with visual instructions in the HTML will be used to create another tree: the render tree.

1. The render tree contains rectangles with visual attributes like color and dimensions. The rectangles are in the right order to be displayed on the screen.

1. After the construction of the render tree it goes through a "layout" process. This means giving each node the exact coordinates where it should appear on the screen. The next stage is painting - the render tree will be traversed and each node will be painted using the UI backend layer.

1. It's important to understand that this is a gradual process. For better user experience, the rendering engine will try to display contents on the screen as soon as possible. It will not wait until all HTML is parsed before starting to build and layout the render tree. Parts of the content will be parsed and displayed, while the process continues with the rest of the contents that keeps coming from the network.

![main flow examples](https://web-dev.imgix.net/image/T4FyVKpzu4WKF1kBNvXepbi08t52/S9TJhnMX1cu1vrYuQRqM.png?auto=format&w=650)

## Parsing -general
Parsing a document means translating it to a structure the code can use. The result of parsing is usually a tree of nodes that represent the structure of the document. This is called a parse tree or a syntax tree.
![parsing example](https://web-dev.imgix.net/image/T4FyVKpzu4WKF1kBNvXepbi08t52/xNQUG9emGd8FzuOpumP7.png?auto=format&w=439)

## Types of Parsers
There are 2 types of Parsers involved:
1. Top down Parsers:

The top down parser will start from higher level rule: it will identify 2 + 3 as an expression. It will the identify 2 + 3 - 1 as an expression
 (the process of identifying the expression evolves, matching the other rules, but the start point is the highest level rule).

2. Bottom Up Parsers:

The bottom up parser will scan the input until a rule is matched. It will then replace the matching input with the rule. This will go on until the end of the input. The partly matched expression is placed on the parser's stack.

### 1. HTML parser:
The job of the HTML parser is to parse the HTML markup into a parse tree.
The vocabulary and syntax of HTML are defined in specifications created by the W3C organization.HTML parsing involves tokenization and tree construction. HTML tokens include start and end tags, as well as attribute names and values. If the document is well-formed, parsing it is straightforward and faster. The parser parses tokenized input into the document, building up the document tree.




### 2.CSS parser:
CSS Parser generators to create parsers automatically from the CSS grammar files. As you recall from the parser introduction, Bison creates a bottom up shift-reduce parser. Firefox uses a top down parser written manually. In both cases each CSS file is parsed into a StyleSheet object. Each object contains CSS rules. The CSS rule objects contain selector and declaration objects and other objects corresponding to CSS grammar.

![css parser](https://web-dev.imgix.net/image/T4FyVKpzu4WKF1kBNvXepbi08t52/vBMlouM57RHDG29Ukzhi.png?auto=format&w=500)

## The order of processing scripts and style sheets 

### Scripts
The model of the web is synchronous. Authors expect scripts to be parsed and executed immediately when the parser reaches a \<script\> tag. The parsing of the document halts until the script has been executed. If the script is external then the resource must first be fetched from the network - this is also done synchronously, and parsing halts until the resource is fetched. This was the model for many years and is also specified in HTML4 and 5 specifications. Authors can add the "defer" attribute to a script, in which case it will not halt document parsing and will execute after the document is parsed. HTML5 adds an option to mark the script as asynchronous so it will be parsed and executed by a different thread.

### Speculative parsing
Both WebKit and Firefox do this optimization. While executing scripts, another thread parses the rest of the document and finds out what other resources need to be loaded from the network and loads them. In this way, resources can be loaded on parallel connections and overall speed is improved. Note: the speculative parser only parses references to external resources like external scripts, style sheets and images: it doesn't modify the DOM tree - that is left to the main parser.

### Style sheets 
Style sheets on the other hand have a different model. Conceptually it seems that since style sheets don't change the DOM tree, there is no reason to wait for them and stop the document parsing. There is an issue, though, of scripts asking for style information during the document parsing stage. If the style is not loaded and parsed yet, the script will get wrong answers and apparently this caused lots of problems. It seems to be an edge case but is quite common. Firefox blocks all scripts when there is a style sheet that is still being loaded and parsed. WebKit blocks scripts only when they try to access certain style properties that may be affected by unloaded style sheets.

After going through all this processes (sync and async) browser make the DOM Object and finally shows the Web page to the user.