# nodejs-backend-template

# Info
This is a template for backend projects using `expresss` and `mongoose` **Rolled out with ❤️ by Kavii Suri - Black Marbles Tech**

## Usage

### General 
- Use the `asyncHandler` function from the `express-async-handler` to wrap async express routes (this is done due to error handling purposes)
  - example 
      ```javascript
      // async route
      router.get('/async-route', asyncHandler(async (req, res) => {
          // Normal Express Route Code
      }))
      ```

### Routing
- Routes are supposed to be made using the express routers each of them being a seperate file in the routes folder. 
- All routers must be used by the index router

### Error Handeling
- Errors are cought automatically when you throw them using Node JS Error
- To define statusCode of an error, add a property called `statusCode`
  - example 
      ```javascript
      // sync error
      router.get('/sync-error', (req, res) => {
          const error = new Error("Sync Error Handling working")
          error.statusCode = 500
          throw error
      })
      ```
- For Async Errors, the procedure is the same (Just Use the `asyncHandler` as told above)
  - example 
      ```javascript
      // async error
      router.get('/async-error', asyncHandler(async (req, res) => {
          const error = new Error("Async Error Handling working")
          error.statusCode = 500
          throw error
      }))
      ```
