#!/bin/bash
 
if [[ $VERCEL_ENV == "production"  ]] ; then 
  echo "This is our main branch"
  npm run build:production
else 
  echo "This is not our main branch"
  npm run build:preview
fi