# Use the official Node.js 14 image as base
FROM node:21-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and yarn.lock to the container
COPY package*.json yarn.lock ./

# Install dependencies using Yarn
RUN yarn install

# Copy the rest of the application code
COPY . .

# Build TypeScript code
RUN yarn build

#Port at which your application runs
ENV PORT=3000

# Expose the port your app runs on
EXPOSE 3000

# Command to run the application
CMD ["node", "./dist/index.js"]
