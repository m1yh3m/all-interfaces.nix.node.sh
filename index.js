#!/usr/bin/env node

const { execSync } = require('child_process')

console.log(execSync(`ifconfig -a | grep "^[a-zA-Z0-9]" | awk -F':' '{print $1}'`).toString())

