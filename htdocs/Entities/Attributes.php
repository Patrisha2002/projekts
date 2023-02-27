<?php

class Attributes{
    
    public $prodYear;
    public $engineVolume;
    public $horsePower;
    public $color;
    public $engineType;
    public $transmission;
    public $body;
    public $heatedSeats;
    public $heatedSteeringWheel;
    public $navigationSystem;
    public $powerLiftage;
    public $brakeAssist;
    public $stabilityControl;
    public $leatherInterior;
    public $bluetooth;
    public $cruiseControl;
    public $toning;
    public $handsFree;

    /**
     * @param $prodYear
     * @param $engineVolume
     * @param $horsePower
     * @param $color
     * @param $engineType
     * @param $transmission
     * @param $body
     * @param $heatedSeats
     * @param $heatedSteeringWheel
     * @param $navigationSystem
     * @param $powerLiftage
     * @param $breakeAssist
     * @param $stabilityControl
     * @param $leatherInterior
     * @param $bluetooth
     * @param $cruiseControl
     * @param $toning
     * @param $handsFree
     */
    public function __construct($prodYear = null, $engineVolume = null, $horsePower = null, $color = null, $engineType = null,
                                $transmission = null, $body = null, $heatedSeats = null, $heatedSteeringWheel = null,
                                $navigationSystem = null, $powerLiftage = null, $brakeAssist = null, $stabilityControl = null,
                                $leatherInterior = null, $bluetooth = null, $cruiseControl = null, $toning = null, $handsFree = null)
    {
        $this->prodYear = $prodYear;
        $this->engineVolume = $engineVolume;
        $this->horsePower = $horsePower;
        $this->color = $color;
        $this->engineType = $engineType;
        $this->transmission = $transmission;
        $this->body = $body;
        $this->heatedSeats = $heatedSeats;
        $this->heatedSteeringWheel = $heatedSteeringWheel;
        $this->navigationSystem = $navigationSystem;
        $this->powerLiftage = $powerLiftage;
        $this->brakeAssist = $brakeAssist;
        $this->stabilityControl = $stabilityControl;
        $this->leatherInterior = $leatherInterior;
        $this->bluetooth = $bluetooth;
        $this->cruiseControl = $cruiseControl;
        $this->toning = $toning;
        $this->handsFree = $handsFree;
    }

}