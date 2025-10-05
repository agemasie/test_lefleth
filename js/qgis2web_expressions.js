// Aggregates

// Color

// Conditionals
function fnc_coalesce(values, context) {
    for (i = 0; i < values.length; i++) {
        if (values[i] !== null) {
            return values[i];
        }
        
    }
    return 'ERROR';
};

// Conversions

// Custom

// Date and Time

// Fields and Values

// Fuzzy Matching

// General

// Geometry
function fnc_azimuth(values, context) {
    return false;
};

function fnc_project(values, context) {
    return false;
};

// Math
function fnc_abs(values, context) {
    return Math.abs(values[0]);
};

function fnc_degrees(values, context) {
    return values[0] * (180/Math.PI);
};

function fnc_radians(values, context) {
    return values[0] * (Math.PI/180);
};

function fnc_sqrt(values, context) {
    return Math.sqrt(values[0]);
};

function fnc_cos(values, context) {
    return Math.cos(values[0]);
};

function fnc_sin(values, context) {
    return Math.sin(values[0]);
};

function fnc_tan(values, context) {
    return Math.tan(values[0]);
};

function fnc_asin(values, context) {
    return Math.asin(values[0]);
};

function fnc_acos(values, context) {
    return Math.acos(values[0]);
};

function fnc_atan(values, context) {
    return Math.atan(values[0]);
};

function fnc_atan2(values, context) {
    return Math.atan2(values[0]);
};

function fnc_exp(values, context) {
    return Math.exp(values[0]);
};

function fnc_ln(values, context) {
    return Math.log(values[0]);
};

function fnc_log10(values, context) {
    return Math.log10(values[0]);
};

function fnc_log(values, context) {
    return Math.log(values[0]) / Math.log(values[1]);
};

function fnc_round(values, context) {
    return false;
};

function fnc_rand(values, context) {
    return Math.floor(Math.random()*(values[1]-values[0]+1)+values[0]);
};

function fnc_randf(values, context) {
    return Math.random()*(values[1]-values[0]+1)+values[0];
};

function fnc_max(values, context) {
    return Math.max.apply(this, values);
};

function fnc_min(values, context) {
    return Math.min.apply(this, values);
};

function fnc_clamp(values, context) {
    return false;
};

// Operators

// Record

// String

// TimeManager

// Variables



function fnc_scale_linear(values, context) {
    return false;
};

function fnc_scale_exp(values, context) {
    return false;
};

function fnc_floor(values, context) {
    return false;
};

function fnc_ceil(values, context) {
    return false;
};

function fnc_pi(values, context) {
    return false;
};

function fnc_to_int(values, context) {
    return false;
};

function fnc_to_real(values, context) {
    return false;
};

function fnc_to_string(values, context) {
    return false;
};

function fnc_to_datetime(values, context) {
    return false;
};

function fnc_to_date(values, context) {
    return false;
};

function fnc_to_time(values, context) {
    return false;
};

function fnc_to_interval(values, context) {
    return false;
};

function fnc_if(values, context) {
    return false;
};

function fnc_aggregate(values, context) {
    return false;
};

function fnc_relation_aggregate(values, context) {
    return false;
};

function fnc_count(values, context) {
    return false;
};

function fnc_count_distinct(values, context) {
    return false;
};

function fnc_count_missing(values, context) {
    return false;
};

function fnc_minimum(values, context) {
    return false;
};

function fnc_maximum(values, context) {
    return false;
};

function fnc_sum(values, context) {
    return false;
};

function fnc_mean(values, context) {
    return false;
};

function fnc_median(values, context) {
    return false;
};

function fnc_stdev(values, context) {
    return false;
};

function fnc_range(values, context) {
    return false;
};

function fnc_minority(values, context) {
    return false;
};

function fnc_majority(values, context) {
    return false;
};

function fnc_q1(values, context) {
    return false;
};

function fnc_q3(values, context) {
    return false;
};

function fnc_iqr(values, context) {
    return false;
};

function fnc_min_length(values, context) {
    return false;
};

function fnc_max_length(values, context) {
    return false;
};

function fnc_concatenate(values, context) {
    return false;
};

function fnc_regexp_match(values, context) {
    return false;
};

function fnc_now(values, context) {
    return false;
};

function fnc_age(values, context) {
    return false;
};

function fnc_year(values, context) {
    return false;
};

function fnc_month(values, context) {
    return false;
};

function fnc_week(values, context) {
    return false;
};

function fnc_day(values, context) {
    return false;
};

function fnc_hour(values, context) {
    return false;
};

function fnc_minute(values, context) {
    return false;
};

function fnc_second(values, context) {
    return false;
};

function fnc_day_of_week(values, context) {
    return false;
};

function fnc_lower(values, context) {
    return values[0].toLowerCase();
};

function fnc_upper(values, context) {
    return false;
};

function fnc_title(values, context) {
    return false;
};

function fnc_trim(values, context) {
    return false;
};

function fnc_levenshtein(values, context) {
    return false;
};

function fnc_longest_common_substring(values, context) {
    return false;
};

function fnc_hamming_distance(values, context) {
    return false;
};

function fnc_soundex(values, context) {
    return false;
};

function fnc_char(values, context) {
    return false;
};

function fnc_wordwrap(values, context) {
    return false;
};

function fnc_length(values, context) {
    return false;
};

function fnc_replace(values, context) {
    return false;
};

function fnc_regexp_replace(values, context) {
    return false;
};

function fnc_regexp_substr(values, context) {
    return false;
};

function fnc_substr(values, context) {
    return false;
};

function fnc_concat(values, context) {
    return false;
};

function fnc_strpos(values, context) {
    return false;
};

function fnc_left(values, context) {
    return false;
};

function fnc_right(values, context) {
    return false;
};

function fnc_rpad(values, context) {
    return false;
};

function fnc_lpad(values, context) {
    return false;
};

function fnc_format(values, context) {
    return false;
};

function fnc_format_number(values, context) {
    return false;
};

function fnc_format_date(values, context) {
    return false;
};

function fnc_color_rgb(values, context) {
    return false;
};

function fnc_color_rgba(values, context) {
    return false;
};

function fnc_ramp_color(values, context) {
    return false;
};

function fnc_color_hsl(values, context) {
    return false;
};

function fnc_color_hsla(values, context) {
    return false;
};

function fnc_color_hsv(values, context) {
    return false;
};

function fnc_color_hsva(values, context) {
    return false;
};

function fnc_color_cmyk(values, context) {
    return false;
};

function fnc_color_cmyka(values, context) {
    return false;
};

function fnc_color_part(values, context) {
    return false;
};

function fnc_darker(values, context) {
    return false;
};

function fnc_lighter(values, context) {
    return false;
};

function fnc_set_color_part(values, context) {
    return false;
};

function fnc_area(values, context) {
    return false;
};

function fnc_perimeter(values, context) {
    return false;
};

function fnc_x(values, context) {
    return false;
};

function fnc_y(values, context) {
    return false;
};

function fnc_z(values, context) {
    return false;
};

function fnc_m(values, context) {
    return false;
};

function fnc_point_n(values, context) {
    return false;
};

function fnc_start_point(values, context) {
    return false;
};

function fnc_end_point(values, context) {
    return false;
};

function fnc_nodes_to_points(values, context) {
    return false;
};

function fnc_segments_to_lines(values, context) {
    return false;
};

function fnc_make_point(values, context) {
    return false;
};

function fnc_make_point_m(values, context) {
    return false;
};

function fnc_make_line(values, context) {
    return false;
};

function fnc_make_polygon(values, context) {
    return false;
};

function fnc_x_min(values, context) {
    return false;
};

function fnc_x_max(values, context) {
    return false;
};

function fnc_y_min(values, context) {
    return false;
};

function fnc_y_max(values, context) {
    return false;
};

function fnc_geom_from_wkt(values, context) {
    return false;
};

function fnc_geom_from_gml(values, context) {
    return false;
};

function fnc_relate(values, context) {
    return false;
};

function fnc_intersects_bbox(values, context) {
    return false;
};

function fnc_disjoint(values, context) {
    return false;
};

function fnc_intersects(values, context) {
    return false;
};

function fnc_touches(values, context) {
    return false;
};

function fnc_crosses(values, context) {
    return false;
};

function fnc_contains(values, context) {
    return false;
};

function fnc_overlaps(values, context) {
    return false;
};

function fnc_within(values, context) {
    return false;
};

function fnc_translate(values, context) {
    return false;
};

function fnc_buffer(values, context) {
    return false;
};

function fnc_centroid(values, context) {
    return false;
};

function fnc_point_on_surface(values, context) {
    return false;
};

function fnc_reverse(values, context) {
    return false;
};

function fnc_exterior_ring(values, context) {
    return false;
};

function fnc_interior_ring_n(values, context) {
    return false;
};

function fnc_geometry_n(values, context) {
    return false;
};

function fnc_boundary(values, context) {
    return false;
};

function fnc_line_merge(values, context) {
    return false;
};

function fnc_bounds(values, context) {
    return false;
};

function fnc_num_points(values, context) {
    return false;
};

function fnc_num_interior_rings(values, context) {
    return false;
};

function fnc_num_rings(values, context) {
    return false;
};

function fnc_num_geometries(values, context) {
    return false;
};

function fnc_bounds_width(values, context) {
    return false;
};

function fnc_bounds_height(values, context) {
    return false;
};

function fnc_is_closed(values, context) {
    return false;
};

function fnc_convex_hull(values, context) {
    return false;
};

function fnc_difference(values, context) {
    return false;
};

function fnc_distance(values, context) {
    return false;
};

function fnc_intersection(values, context) {
    return false;
};

function fnc_sym_difference(values, context) {
    return false;
};

function fnc_combine(values, context) {
    return false;
};

function fnc_union(values, context) {
    return false;
};

function fnc_geom_to_wkt(values, context) {
    return false;
};

function fnc_geometry(values, context) {
    return false;
};

function fnc_transform(values, context) {
    return false;
};

function fnc_extrude(values, context) {
    return false;
};

function fnc_order_parts(values, context) {
    return false;
};

function fnc_closest_point(values, context) {
    return false;
};

function fnc_shortest_line(values, context) {
    return false;
};

function fnc_line_interpolate_point(values, context) {
    return false;
};

function fnc_line_interpolate_angle(values, context) {
    return false;
};

function fnc_line_locate_point(values, context) {
    return false;
};

function fnc_angle_at_vertex(values, context) {
    return false;
};

function fnc_distance_to_vertex(values, context) {
    return false;
};

function fnc_uuid(values, context) {
    return false;
};

function fnc_get_feature(values, context) {
    return false;
};

function fnc_layer_property(values, context) {
    return false;
};

function fnc_var(values, context) {
    return false;
};

function fnc_eval(values, context) {
    return false;
};

function fnc_attribute(values, context) {
    return false;
};

function fnc__specialcol_(values, context) {
    return false;
};

function fnc_project_color(values, context) {
    return false;
};



function exp_Harar_Landmark_WGS84_v1_1rule0_eval_expression(context) {
    // Fun_Type = 'Academy'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'Academy');
    } else {
        return (feature['Fun_Type']  == 'Academy');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule1_eval_expression(context) {
    // Fun_Type = 'Administration'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'Administration');
    } else {
        return (feature['Fun_Type']  == 'Administration');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule2_eval_expression(context) {
    // Fun_Type = 'Aid Organization'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'Aid Organization');
    } else {
        return (feature['Fun_Type']  == 'Aid Organization');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule3_eval_expression(context) {
    // Fun_Type = 'ATM'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'ATM');
    } else {
        return (feature['Fun_Type']  == 'ATM');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule4_eval_expression(context) {
    // Fun_Type = 'Bank'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'Bank');
    } else {
        return (feature['Fun_Type']  == 'Bank');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule5_eval_expression(context) {
    // Fun_Type = 'Bus Station'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'Bus Station');
    } else {
        return (feature['Fun_Type']  == 'Bus Station');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule6_eval_expression(context) {
    // Fun_Type = 'Business Centers'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'Business Centers');
    } else {
        return (feature['Fun_Type']  == 'Business Centers');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule7_eval_expression(context) {
    // Fun_Type = 'Cafe'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'Cafe');
    } else {
        return (feature['Fun_Type']  == 'Cafe');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule8_eval_expression(context) {
    // Fun_Type = 'Cafe and Restaurant'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'Cafe and Restaurant');
    } else {
        return (feature['Fun_Type']  == 'Cafe and Restaurant');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule9_eval_expression(context) {
    // Fun_Type = 'Catholic Church'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'Catholic Church');
    } else {
        return (feature['Fun_Type']  == 'Catholic Church');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule10_eval_expression(context) {
    // Fun_Type = 'Cattle Market'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'Cattle Market');
    } else {
        return (feature['Fun_Type']  == 'Cattle Market');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule11_eval_expression(context) {
    // Fun_Type = 'Chancery Residence'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'Chancery Residence');
    } else {
        return (feature['Fun_Type']  == 'Chancery Residence');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule12_eval_expression(context) {
    // Fun_Type = 'Clinic'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'Clinic');
    } else {
        return (feature['Fun_Type']  == 'Clinic');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule13_eval_expression(context) {
    // Fun_Type = 'College'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'College');
    } else {
        return (feature['Fun_Type']  == 'College');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule14_eval_expression(context) {
    // Fun_Type = 'Community Based Organizations'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'Community Based Organizations');
    } else {
        return (feature['Fun_Type']  == 'Community Based Organizations');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule15_eval_expression(context) {
    // Fun_Type = 'Court'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'Court');
    } else {
        return (feature['Fun_Type']  == 'Court');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule16_eval_expression(context) {
    // Fun_Type = 'Credit Associations'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'Credit Associations');
    } else {
        return (feature['Fun_Type']  == 'Credit Associations');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule17_eval_expression(context) {
    // Fun_Type = 'Electric Power Office'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'Electric Power Office');
    } else {
        return (feature['Fun_Type']  == 'Electric Power Office');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule18_eval_expression(context) {
    // Fun_Type = 'Fuel Station'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'Fuel Station');
    } else {
        return (feature['Fun_Type']  == 'Fuel Station');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule19_eval_expression(context) {
    // Fun_Type = 'Garage'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'Garage');
    } else {
        return (feature['Fun_Type']  == 'Garage');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule20_eval_expression(context) {
    // Fun_Type = 'Green Areas'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'Green Areas');
    } else {
        return (feature['Fun_Type']  == 'Green Areas');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule21_eval_expression(context) {
    // Fun_Type = 'Grocery'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'Grocery');
    } else {
        return (feature['Fun_Type']  == 'Grocery');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule22_eval_expression(context) {
    // Fun_Type = 'Gust House/ Pension'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'Gust House/ Pension');
    } else {
        return (feature['Fun_Type']  == 'Gust House/ Pension');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule23_eval_expression(context) {
    // Fun_Type = 'Health Center'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'Health Center');
    } else {
        return (feature['Fun_Type']  == 'Health Center');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule24_eval_expression(context) {
    // Fun_Type = 'Health Post'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'Health Post');
    } else {
        return (feature['Fun_Type']  == 'Health Post');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule25_eval_expression(context) {
    // Fun_Type = 'Heavy Industry'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'Heavy Industry');
    } else {
        return (feature['Fun_Type']  == 'Heavy Industry');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule26_eval_expression(context) {
    // Fun_Type = 'High School'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'High School');
    } else {
        return (feature['Fun_Type']  == 'High School');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule27_eval_expression(context) {
    // Fun_Type = 'Historical Building'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'Historical Building');
    } else {
        return (feature['Fun_Type']  == 'Historical Building');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule28_eval_expression(context) {
    // Fun_Type = 'Historical Site'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'Historical Site');
    } else {
        return (feature['Fun_Type']  == 'Historical Site');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule29_eval_expression(context) {
    // Fun_Type = 'Hospital'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'Hospital');
    } else {
        return (feature['Fun_Type']  == 'Hospital');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule30_eval_expression(context) {
    // Fun_Type = 'Hotels'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'Hotels');
    } else {
        return (feature['Fun_Type']  == 'Hotels');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule31_eval_expression(context) {
    // Fun_Type = 'Insurance'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'Insurance');
    } else {
        return (feature['Fun_Type']  == 'Insurance');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule32_eval_expression(context) {
    // Fun_Type = 'International and Regional Organizations'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'International and Regional Organizations');
    } else {
        return (feature['Fun_Type']  == 'International and Regional Organizations');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule33_eval_expression(context) {
    // Fun_Type = 'Kindergarten'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'Kindergarten');
    } else {
        return (feature['Fun_Type']  == 'Kindergarten');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule34_eval_expression(context) {
    // Fun_Type = 'Library'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'Library');
    } else {
        return (feature['Fun_Type']  == 'Library');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule35_eval_expression(context) {
    // Fun_Type = 'Light Industry'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'Light Industry');
    } else {
        return (feature['Fun_Type']  == 'Light Industry');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule36_eval_expression(context) {
    // Fun_Type = 'Mall'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'Mall');
    } else {
        return (feature['Fun_Type']  == 'Mall');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule37_eval_expression(context) {
    // Fun_Type = 'Micro Finance'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'Micro Finance');
    } else {
        return (feature['Fun_Type']  == 'Micro Finance');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule38_eval_expression(context) {
    // Fun_Type = 'Mixed Use'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'Mixed Use');
    } else {
        return (feature['Fun_Type']  == 'Mixed Use');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule39_eval_expression(context) {
    // Fun_Type = 'Monastery'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'Monastery');
    } else {
        return (feature['Fun_Type']  == 'Monastery');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule40_eval_expression(context) {
    // Fun_Type = 'Mosque'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'Mosque');
    } else {
        return (feature['Fun_Type']  == 'Mosque');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule41_eval_expression(context) {
    // Fun_Type = 'Multipurpose Hall'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'Multipurpose Hall');
    } else {
        return (feature['Fun_Type']  == 'Multipurpose Hall');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule42_eval_expression(context) {
    // Fun_Type = 'Museum'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'Museum');
    } else {
        return (feature['Fun_Type']  == 'Museum');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule43_eval_expression(context) {
    // Fun_Type = 'Muslim Cemetery'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'Muslim Cemetery');
    } else {
        return (feature['Fun_Type']  == 'Muslim Cemetery');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule44_eval_expression(context) {
    // Fun_Type = 'Orthodox Tewahedo Church'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'Orthodox Tewahedo Church');
    } else {
        return (feature['Fun_Type']  == 'Orthodox Tewahedo Church');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule45_eval_expression(context) {
    // Fun_Type = 'Other'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'Other');
    } else {
        return (feature['Fun_Type']  == 'Other');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule46_eval_expression(context) {
    // Fun_Type = 'Parks'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'Parks');
    } else {
        return (feature['Fun_Type']  == 'Parks');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule47_eval_expression(context) {
    // Fun_Type = 'Pharmacy'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'Pharmacy');
    } else {
        return (feature['Fun_Type']  == 'Pharmacy');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule48_eval_expression(context) {
    // Fun_Type = 'Playground'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'Playground');
    } else {
        return (feature['Fun_Type']  == 'Playground');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule49_eval_expression(context) {
    // Fun_Type = 'Police Station'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'Police Station');
    } else {
        return (feature['Fun_Type']  == 'Police Station');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule50_eval_expression(context) {
    // Fun_Type = 'Postal Office'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'Postal Office');
    } else {
        return (feature['Fun_Type']  == 'Postal Office');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule51_eval_expression(context) {
    // Fun_Type = 'Poultry'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'Poultry');
    } else {
        return (feature['Fun_Type']  == 'Poultry');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule52_eval_expression(context) {
    // Fun_Type = 'Primary School'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'Primary School');
    } else {
        return (feature['Fun_Type']  == 'Primary School');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule53_eval_expression(context) {
    // Fun_Type = 'Prison'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'Prison');
    } else {
        return (feature['Fun_Type']  == 'Prison');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule54_eval_expression(context) {
    // Fun_Type = 'Protestant Church'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'Protestant Church');
    } else {
        return (feature['Fun_Type']  == 'Protestant Church');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule55_eval_expression(context) {
    // Fun_Type = 'Rehabilitation Center'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'Rehabilitation Center');
    } else {
        return (feature['Fun_Type']  == 'Rehabilitation Center');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule56_eval_expression(context) {
    // Fun_Type = 'Religious School'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'Religious School');
    } else {
        return (feature['Fun_Type']  == 'Religious School');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule57_eval_expression(context) {
    // Fun_Type = 'Residential'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'Residential');
    } else {
        return (feature['Fun_Type']  == 'Residential');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule58_eval_expression(context) {
    // Fun_Type = 'Resort Centers'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'Resort Centers');
    } else {
        return (feature['Fun_Type']  == 'Resort Centers');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule59_eval_expression(context) {
    // Fun_Type = 'Restaurant'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'Restaurant');
    } else {
        return (feature['Fun_Type']  == 'Restaurant');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule60_eval_expression(context) {
    // Fun_Type = 'Roundabout / Square'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'Roundabout / Square');
    } else {
        return (feature['Fun_Type']  == 'Roundabout / Square');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule61_eval_expression(context) {
    // Fun_Type = 'Sector Offices'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'Sector Offices');
    } else {
        return (feature['Fun_Type']  == 'Sector Offices');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule62_eval_expression(context) {
    // Fun_Type = 'Slaughterhouse'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'Slaughterhouse');
    } else {
        return (feature['Fun_Type']  == 'Slaughterhouse');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule63_eval_expression(context) {
    // Fun_Type = 'Special Need'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'Special Need');
    } else {
        return (feature['Fun_Type']  == 'Special Need');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule64_eval_expression(context) {
    // Fun_Type = 'Specialized Hospital'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'Specialized Hospital');
    } else {
        return (feature['Fun_Type']  == 'Specialized Hospital');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule65_eval_expression(context) {
    // Fun_Type = 'Stadium'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'Stadium');
    } else {
        return (feature['Fun_Type']  == 'Stadium');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule66_eval_expression(context) {
    // Fun_Type = 'Supermarket'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'Supermarket');
    } else {
        return (feature['Fun_Type']  == 'Supermarket');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule67_eval_expression(context) {
    // Fun_Type = 'Telecom Service'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'Telecom Service');
    } else {
        return (feature['Fun_Type']  == 'Telecom Service');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule68_eval_expression(context) {
    // Fun_Type = 'Tire Repair (Gommista)'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'Tire Repair (Gommista)');
    } else {
        return (feature['Fun_Type']  == 'Tire Repair (Gommista)');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule69_eval_expression(context) {
    // Fun_Type = 'TVET'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'TVET');
    } else {
        return (feature['Fun_Type']  == 'TVET');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule70_eval_expression(context) {
    // Fun_Type = 'Unions'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'Unions');
    } else {
        return (feature['Fun_Type']  == 'Unions');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule71_eval_expression(context) {
    // Fun_Type = 'University'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'University');
    } else {
        return (feature['Fun_Type']  == 'University');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule72_eval_expression(context) {
    // Fun_Type = 'Veterinary'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'Veterinary');
    } else {
        return (feature['Fun_Type']  == 'Veterinary');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule73_eval_expression(context) {
    // Fun_Type = 'Water Reservoir'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'Water Reservoir');
    } else {
        return (feature['Fun_Type']  == 'Water Reservoir');
    }
}


function exp_Harar_Landmark_WGS84_v1_1rule74_eval_expression(context) {
    // Fun_Type = 'Youth Center'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['Fun_Type']  == 'Youth Center');
    } else {
        return (feature['Fun_Type']  == 'Youth Center');
    }
}