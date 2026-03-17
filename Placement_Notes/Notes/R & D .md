**Q:** Explain **SSO (Single Sign-On)** in **notes format**?

**A:**

---

### 🔹 SSO (Single Sign-On) – Notes

**Definition:**

- One login → access multiple applications without logging in again

---

### 🔹 Example

- Login to Google
- Access:
  - Gmail
  - Google Drive
  - YouTube

---

### 🔹 How It Works

- User logs in once
- Identity Provider (IdP) verifies user
- Token/session is created
- Other apps trust the token → grant access

---

### 🔹 Key Components

- User
- Identity Provider (IdP)
- Service Provider (SP)

---

### 🔹 Advantages

- Single login (easy access)
- Saves time
- Centralized authentication

---

### 🔹 Disadvantages

- Single point of failure
- If hacked → all systems affected

---

### 🔹 Technologies Used

- SAML
- OAuth
- OpenID Connect

---

### 🔹 Real-World Use

- Corporate login systems
- Social login (Google, Facebook)

---

✅ **Summary:**
SSO = **One login → multiple systems access**

**Q:** Explain **SAML** in notes format?

**A:**

---

### 🔹 SAML – Notes

(**Security Assertion Markup Language**)

---

### 🔹 Definition

- XML-based standard for **authentication and authorization**
- Used for **SSO (Single Sign-On)**

---

### 🔹 Purpose

- Allows user to **log in once** and access multiple applications securely

---

### 🔹 Key Components

- **User** → person logging in
- **Identity Provider (IdP)** → authenticates user
- **Service Provider (SP)** → application (like web app)

---

### 🔹 How It Works

1. User tries to access an app (SP)
2. SP redirects user to IdP
3. User logs in at IdP
4. IdP sends **SAML Assertion (XML token)**
5. SP trusts it → grants access

---

### 🔹 SAML Assertion Contains

- User identity (username/email)
- Authentication status
- Permissions/roles

---

### 🔹 Advantages

- Secure (XML + digital signature)
- No need to store passwords in every app
- Supports SSO

---

### 🔹 Disadvantages

- Complex setup
- XML-based → heavier than modern methods

---

### 🔹 Where Used

- Enterprise applications
- Corporate SSO systems

---

### 🔹 Comparison

- SAML → Enterprise, XML-based
- OAuth/OpenID → Modern, API-based

---

✅ **Summary:**

SAML = **Standard that enables secure SSO using XML-based authentication tokens**

**Q:** Explain **OIDC (OpenID Connect)** in notes format?

**A:**

---

### 🔹 OIDC – Notes

(**OpenID Connect**)

---

### 🔹 Definition

- Authentication layer built on top of **OAuth 2.0**
- Used to **verify user identity** (who the user is)

---

### 🔹 Purpose

- Enables **SSO login + user authentication**
- Returns user information securely

---

### 🔹 Key Components

- **User**
- **Identity Provider (IdP)** (Auth Server)
- **Client (Application)**

---

### 🔹 How It Works

1. User tries to log in to app
2. App redirects to IdP
3. User logs in
4. IdP sends **ID Token (JWT)**
5. App verifies token → grants access

---

### 🔹 Tokens Used

- **ID Token** → user identity (main part of OIDC)
- **Access Token** → access APIs
- **Refresh Token** → get new tokens

---

### 🔹 Advantages

- Lightweight (JSON, not XML)
- Easy to use with web/mobile apps
- Supports modern apps and APIs

---

### 🔹 Disadvantages

- Requires HTTPS (strict security)
- Token misuse risk if not handled properly

---

### 🔹 Where Used

- Social logins (Google, Facebook)
- Mobile apps
- Modern web applications

---

### 🔹 Comparison

- SAML → XML, enterprise
- OIDC → JSON, modern apps

---

✅ **Summary:**

OIDC = **Modern authentication protocol for SSO using JSON tokens (JWT)**

**Q:** Explain **OAuth 2.0** in notes format?

**A:**

---

### 🔹 OAuth 2.0 – Notes

(**OAuth 2.0**)

---

### 🔹 Definition

- Authorization framework
- Allows apps to **access user data without sharing password**

---

### 🔹 Purpose

- Grant **limited access** to resources (APIs)
- Used for secure **third-party access**

---

### 🔹 Key Components

- **Resource Owner** → User
- **Client** → Application
- **Authorization Server** → Issues tokens
- **Resource Server** → API/data server

---

### 🔹 How It Works

1. User logs in via Authorization Server
2. User gives permission (consent)
3. App receives **Access Token**
4. App uses token to access user data

---

### 🔹 Tokens

- **Access Token** → access resources
- **Refresh Token** → get new access token

---

### 🔹 Common Grant Types

- Authorization Code (most secure)
- Client Credentials
- Implicit (deprecated)
- Password (not recommended)

---

### 🔹 Advantages

- No password sharing
- Secure API access
- Widely used standard

---

### 🔹 Disadvantages

- Complex implementation
- Not for authentication (only authorization)

---

### 🔹 Where Used

- Login with Google
- Login with Facebook
- API access in apps

---

### 🔹 Key Difference

- OAuth 2.0 → Authorization
- OIDC → Authentication + Authorization

---

✅ **Summary:**

OAuth 2.0 = **Secure way to give limited access without sharing passwords**

**Q:** Explain **JWT Tokens** in notes format?

**A:**

---

### 🔹 JWT – Notes

(**JSON Web Token**)

---

### 🔹 Definition

- Compact, URL-safe token format
- Used for **authentication and authorization**

---

### 🔹 Structure

JWT has **3 parts** (separated by `.`):

1. **Header** → algorithm + token type
2. **Payload** → user data (claims)
3. **Signature** → verifies authenticity

Format:

```
header.payload.signature
```

---

### 🔹 Example

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

---

### 🔹 Purpose

- Securely transfer user information
- Used in **login systems, APIs, SSO**

---

### 🔹 How It Works

1. User logs in
2. Server generates JWT
3. Client stores token (browser/app)
4. Client sends token in requests
5. Server verifies token → grants access

---

### 🔹 Payload Contains

- User ID
- Roles/permissions
- Expiry time

---

### 🔹 Advantages

- Stateless (no server storage needed)
- Fast and scalable
- Easy to use in APIs

---

### 🔹 Disadvantages

- If stolen → can be misused
- Cannot easily revoke (until expiry)

---

### 🔹 Where Used

- Web apps (login systems)
- APIs (Authorization header)
- OIDC authentication

---

### 🔹 Security Tips

- Always use HTTPS
- Keep expiry short
- Don’t store sensitive data in payload

---

### 🔹 Example Header Usage

```
Authorization: Bearer <token>
```

---

✅ **Summary:**

JWT = **Secure token to identify users and control access without storing session on server**

**Q:** Difference between **Session vs Token Authentication**?

**A:**

---

### 🔹 Session Authentication

**Definition:**

- Server stores user session data

How it works:

1. User logs in
2. Server creates **session ID**
3. Session stored on server
4. Client stores session ID (cookie)
5. Server checks session for every request

Pros:

- Easy to implement
- Can invalidate anytime (logout works instantly)

Cons:

- Server memory usage (stores sessions)
- Not scalable for large systems

---

### 🔹 Token Authentication

**Definition:**

- Uses tokens like **JSON Web Token**
- Server does NOT store session

How it works:

1. User logs in
2. Server generates token
3. Client stores token
4. Client sends token in each request
5. Server verifies token

Pros:

- Stateless (no server storage)
- Scalable (best for APIs, microservices)

Cons:

- Hard to revoke before expiry
- Token theft risk if not secured

---

### 🔹 Key Differences

| Feature          | Session              | Token             |
| ---------------- | -------------------- | ----------------- |
| Storage          | Server               | Client            |
| Scalability      | Low                  | High              |
| Security Control | Easy to revoke       | Hard to revoke    |
| Usage            | Traditional web apps | APIs, modern apps |

---

### 🔥 Reality Check

- Small apps → Session is fine
- Modern apps / APIs → Token is standard

---

✅ **Final Answer:**

- Session = **server-based authentication**
- Token = **stateless, scalable authentication**

**Q:** Explain **CSRF** in notes format?

**A:**

---

### 🔹 CSRF – Notes

(**Cross-Site Request Forgery**)

---

### 🔹 Definition

- Attack where a **malicious site tricks a user’s browser** to perform unwanted actions on another site

---

### 🔹 Key Idea

- Uses **trusted login session (cookies)** without user knowledge

---

### 🔹 Example

1. User logs into bank website
2. User visits malicious site
3. Malicious site sends request → transfer money
4. Browser sends **session cookie automatically**
5. Bank thinks request is valid → action executed

---

### 🔹 Prevention Methods

- **CSRF Tokens** (most important)
- SameSite cookies
- Check **Origin/Referer headers**
- Use **POST instead of GET** for sensitive actions

---

### 🔹 CSRF vs XSS (Quick)

- CSRF → tricks user to send request
- XSS → injects malicious script

---

✅ **Summary:**

CSRF = **Forcing a logged-in user to perform unwanted actions without their consent**

**Q:** Explain **CORS** in notes format?

**A:**

---

### 🔹 CORS – Notes

(**Cross-Origin Resource Sharing**)

---

### 🔹 Definition

- Browser security feature that **controls requests between different origins**

---

### 🔹 What is Origin?

- Combination of: protocol, domain, port (e.g., `https://example.com:443`)

---

### 🔹 Purpose of CORS

- Allows server to **explicitly permit cross-origin requests**

---

### 🔹 How It Works

1. Browser sends request to server
2. Server responds with headers
3. Browser checks headers → allows or blocks request

---

### 🔹 Important Headers

- `Access-Control-Allow-Origin`
- `Access-Control-Allow-Methods`
- `Access-Control-Allow-Headers`

Example:

```http
Access-Control-Allow-Origin: *
```

---

### 🔹 Types of Requests

- **Simple Request** → direct request
- **Preflight Request** → browser sends `OPTIONS` first to check permission

---

✅ **Summary:**

CORS = **Mechanism that allows or blocks cross-origin requests based on server rules**

**Q:** Explain **HTTPS / TLS** in notes format?

**A:**

---

### 🔹 HTTPS / TLS – Notes

(**HTTPS**, **Transport Layer Security**)

---

### 🔹 Definition

- **HTTPS** = HTTP + TLS
- Provides **secure communication over the internet**

---

### 🔹 Purpose

- Encrypt data between client and server
- Prevent eavesdropping, tampering, and MITM attacks

---

### 🔹 How It Works (Simplified)

1. Client connects to HTTPS site
2. Server sends **SSL/TLS certificate**
3. Client verifies certificate
4. Secure key exchange happens
5. Encrypted communication starts

---

### 🔹 Key Concepts

- Encryption → data is unreadable to attackers
- Decryption → only receiver can read
- Certificate → proves server identity

---

✅ **Summary:**

HTTPS/TLS = **Secure, encrypted communication between client and server**

**Q:** Difference between **TCP Handshake vs TLS Handshake**?

**A:**

---

### 🔹 TCP Handshake (3-Way Handshake)

- Purpose: Establish connection between client and server
- Steps:
  1. SYN → Client → Server
  2. SYN-ACK → Server → Client
  3. ACK → Client → Server
- Result: Connection established (no encryption yet)

---

### 🔹 TLS Handshake

- Purpose: Establish secure (encrypted) communication
- Steps (simplified):
  1. Client Hello (supported algorithms)
  2. Server Hello + Certificate
  3. Key exchange
  4. Secure session established

---

### 🔹 Flow

1. TCP Handshake
2. TLS Handshake
3. Secure Data Transfer

---

✅ **Summary:**

- TCP = connection setup
- TLS = secure encrypted communication setup

**Q:** Explain **Redis & its use cases** in notes format?

**A:**

---

### 🔹 Redis – Notes

(**Redis – in-memory data store**)

---

### 🔹 Definition

- Open-source **in-memory key-value database**
- Extremely fast (data stored in RAM)

---

### 🔹 Key Features

- Key-value storage
- In-memory (very high speed)
- Supports data types: strings, lists, sets, hashes
- Optional persistence (can save to disk)

---

### 🔹 Common Use Cases

1. Caching – store frequently used data, reduce DB load
2. Session management – store user sessions
3. Rate limiting – control request rates
4. Real-time analytics – counters, metrics
5. Message queue / Pub-Sub – real-time messaging

---

### 🔹 Advantages

- Very fast (RAM)
- Scalable
- Simple to use

---

### 🔹 Disadvantages

- Data loss possible if not persisted
- Not a replacement for SQL DB

---

✅ **Summary:**

Redis = **Ultra-fast in-memory database mainly used for caching and performance optimization**
