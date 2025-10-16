// Type definition for a single engine configuration
export type Engine = {
  emission: string;
  engine_capacity_l: number | string;
  model: string;
  power_ps: number | string;
  max_torque_nm: number | string;
};

// Type definition for a single transmission configuration
export type Transmission = {
  shift_mode: string;
  gears: number;
  model: string;
  shell_material: string;
  torque_nm: number;
  gear_type: string;
  first_gear_ratio: number;
  top_gear_ratio: number;
};

// Type definition for a single drive axle configuration
export type DriveAxle = {
  model: string;
  type: string;
  axle_load_kg?: string; // Optional as some use tons
  axle_load_ton?: number | string; // Optional as some use kg
  torque_nm: number;
  speed_ratio: string;
};

// Type definition for an electric drive motor
export type DriveMotor = {
  model: string;
  power_ps: number;
  max_torque_nm: number;
};

// Type definition for an electric vehicle battery
export type Battery = {
  brand: string;
  model: string;
  charging_performance: string;
  charging_time: string;
};

// Type definition for the engine within a specific configuration
export type SpecificConfigEngine = {
  brand: string;
  model: string;
  emission_standard: string;
  rated_power: string;
  rated_rotation_speed_rpm?: number;
  max_torque_rotation_speed: string;
  displacement_l: number;
};

// Type definition for the transmission within a specific configuration
export type SpecificConfigTransmission = {
  brand: string;
  model: string;
};

// Type definition for a detailed, specific truck configuration
export type SpecificConfiguration = {
  model_name: string;
  model: string;
  steering_position: string;
  transmission_type: string;
  gvw_t: number | string;
  curb_weight_t?: number;
  payload_t?: number | string;
  vehicle_dimension_mm: string;
  wheelbase_mm: number;
  max_speed_kmh?: number;
  engine: SpecificConfigEngine;
  transmission: SpecificConfigTransmission;
  front_axle: string;
  rear_axle: string;
  tire: string;
  body: string;
  cooling_temperature?: string;
};

// Main type definition for a single truck model
export type Truck = {
  modelName: string;
  name: string;
  description: string;
  positioning: string[];
  features: string[];
  driving_types: string[];
  engine?: Engine[];
  transmission?: Transmission[];
  drive_axle?: DriveAxle[];
  drive_motor?: DriveMotor[];
  battery?: Battery[];
  specific_configurations?: SpecificConfiguration[];
};

// Type definition for the entire collection of truck families
export type SagmotoTruckFamilies = {
  heavy_duty_trucks: Truck[];
  medium_duty_trucks: Truck[];
  light_duty_trucks: Truck[];
  electric_light_truck: Truck[];
  off_road_truck: Truck[];
};

// Top-level structure for i18next resources
export type Translation = {
  sagmoto_truck_families: SagmotoTruckFamilies;
};

export type Resources = {
  en: {
    translation: Translation;
  };
  fr: {
    translation: Translation;
  };
};
