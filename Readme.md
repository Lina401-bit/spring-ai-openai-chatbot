\# Spring AI OpenAI Chatbot



A simple AI chatbot application built using \*\*Spring Boot\*\* and \*\*Spring AI\*\*, integrated with the \*\*OpenAI API\*\*.



\## 🚀 Features



\* Chat with OpenAI using Spring AI

\* REST API for AI responses

\* Configurable OpenAI model

\* Simple web-based frontend

\* Image generation service included

\* Maven-based Spring Boot project

\* API key configured through an environment variable



\## 🛠️ Technologies Used



\* Java 17

\* Spring Boot 3.5.10

\* Spring AI 1.1.2

\* OpenAI API

\* Maven

\* HTML

\* CSS

\* JavaScript



\## 📁 Project Structure



```text

src/

├── main/

│   ├── java/

│   │   └── com/ai/SpringAIDemo/

│   │       ├── ChatService.java

│   │       ├── GenAIController.java

│   │       ├── ImageService.java

│   │       └── SpringAiDemoApplication.java

│   │

│   └── resources/

│       ├── application.properties

│       └── static/

│           ├── index.html

│           ├── script.js

│           └── style.css

│

└── test/

```



\## ⚙️ Configuration



The application uses an environment variable for the OpenAI API key.



\### Windows PowerShell



Set your API key:



```powershell

$env:OPENAI\_API\_KEY="your-api-key"

```



Then run the application:



```powershell

.\\mvnw.cmd spring-boot:run

```



> Never commit your actual OpenAI API key to GitHub.



\## 🔗 API Endpoints



\### Check API



```http

GET /api/hello

```



Example:



```text

http://localhost:8080/api/hello

```



\### Ask AI



```http

GET /api/ask-ai?prompt=Hello

```



Example:



```text

http://localhost:8080/api/ask-ai?prompt=Explain%20Java

```



\### Ask AI with Options



```http

GET /api/ask-ai-options?prompt=Explain%20Spring%20Boot

```



\## ▶️ Running the Project



Clone the repository:



```powershell

git clone https://github.com/Lina401-bit/spring-ai-openai-chatbot.git

```



Navigate into the project:



```powershell

cd spring-ai-openai-chatbot

```



Set the OpenAI API key:



```powershell

$env:OPENAI\_API\_KEY="your-api-key"

```



Run the application:



```powershell

.\\mvnw.cmd spring-boot:run

```



The application will start at:



```text

http://localhost:8080

```



\## 🎯 Project Purpose



This project demonstrates how to integrate \*\*Spring AI with OpenAI\*\* to build an AI-powered chatbot using Java and Spring Boot.



\## 👩‍💻 Author



\*\*Lina Patil\*\*



GitHub: https://github.com/Lina401-bit

LinkedIn: https://www.linkedin.com/in/lina-patil38136628a/



