# Web socket playground

### Purpose
- Experiment playing with web sockets and find uses 

### Testing
- Smoke Testing
    - This should be fairly straight forward. We can have two docker containers containing fakes clients
    try and connect to the server. Once we know the connection for both is success full we can say this test passes
- Integration Testing
    - Testing dependencies? If we are
- Unit Testing 
    - Straight forward, mock downstream dependencies, should be centralized to functions etc.
- Load Testing
    - ?? 

### Notes
- Allows for lower latency updates of data for clients
- Use cases
    - Monitoring data
    - Data that is constantly changing and the clients needs to know about it

### Concerns
- How much data can each message contain?
- How do we manage sessions if we want to scale our service horizontally?
- What are the max amount of connections a single server can manage?
- Message failure
    - What happens if a message fails to send to the client?

