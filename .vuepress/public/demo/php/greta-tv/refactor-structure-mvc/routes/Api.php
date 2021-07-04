<?php

namespace routes;

use controllers\VideoApi;

class Api
{
    function __construct()
    {
        $videoApiController = new VideoApi();

        Route::Add('/api/sample', [$videoApiController, 'sample']);
        Route::Add('/api/videos', [$videoApiController, 'videos']);
    }
}

