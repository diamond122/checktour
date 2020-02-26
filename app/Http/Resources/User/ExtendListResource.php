<?php

namespace App\Http\Resources\User;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Shelter\Guard\Models\User;

/**
 * Class ListResource
 * @package Control\Packages\Users\Resources\User
 *
 * @property User $resource
 */
class ExtendListResource extends JsonResource
{
    /**
     * @param Request $request
     * @return array
     */
    public function toArray($request): array
    {
        return [
            'id' => $this->resource->id,
            'email' => $this->resource->email,
            'full_name' => $this->resource->fullName(),
            'today_schedules_count' => $this->resource->schedules()->today()->count(),
            'tomorrow_schedules_count' => $this->resource->schedules()->tomorrow()->count()
        ];
    }
}