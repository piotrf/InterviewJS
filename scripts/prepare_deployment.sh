if [ "$TRAVIS_PULL_REQUEST" = "false" ]; then

    if [ "$TRAVIS_BRANCH" = "master" ]; then
        export COMPOSER = "deploy"
        export VIEWER = "deploy"
        export SITE = "deploy"
        export STYLEGUIDE = "deploy"
        export BUCKET = "interviewjs.io"
        export BUCKET2 = "interviewjs.net"
    fi

    if [ "$TRAVIS_BRANCH" = "develop" ]; then
        export COMPOSER = "deploy"
        export VIEWER = "deploy"
        export SITE = "deploy"
        export STYLEGUIDE = "deploy"
        export BUCKET = "beta.interviewjs.io"
        export BUCKET2 = "beta.interviewjs.net"
    fi

    if [ "$TRAVIS_BRANCH" = "experimental" ]; then
        export COMPOSER = "deploy"
        export VIEWER = "deploy"
        export BUCKET = "alpha.interviewjs.io"
        export BUCKET2 = "alpha.interviewjs.net"
    fi

fi