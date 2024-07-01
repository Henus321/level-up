# Specify a base image
# FROM alpine (alpine = super small)
FROM node:alpine

WORKDIR /usr/client

COPY . .

# Install some dependencies
RUN npm install

# Default command
CMD ["npm", "run", "dev"]
