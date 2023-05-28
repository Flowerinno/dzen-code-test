# Use the Active LTS (long-term support) version of Node
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install app dependencies
RUN npm ci

# Copy the rest of the app
COPY . ./

# Build the React app
RUN npm run build

# Expose the port the app will run on
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
