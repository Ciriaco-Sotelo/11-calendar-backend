#!/bin/bash
 
if [[ $VERCEL_ENV == "Production"  ]] ; then 
  npm run build:production
else 
  npm run build:preview
fi