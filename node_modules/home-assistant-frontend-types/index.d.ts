import type * as home_assistant_js_websocket from 'home-assistant-js-websocket';
import type { HassServiceTarget, MessageBase, HassEntity, Connection, Auth, HassConfig, HassEntities, HassServices, HassEntityBase, HassEntityAttributeBase } from 'home-assistant-js-websocket';
import type { DurationFormat as FormatJSDurationFormat } from '@formatjs/intl-durationformat';
import type * as lit from 'lit';
import type { HTMLTemplateResult, LitElement, SVGTemplateResult, CSSResultGroup, TemplateResult, nothing, PropertyValues, ReactiveElement } from 'lit';
import type * as lit_html from 'lit-html';
import type Dropdown from '@home-assistant/webawesome/dist/components/dropdown/dropdown.d.ts';
import type DropdownItem from '@home-assistant/webawesome/dist/components/dropdown-item/dropdown-item.d.ts';
import type Button from '@home-assistant/webawesome/dist/components/button/button.d.ts';
import type Tooltip from '@home-assistant/webawesome/dist/components/tooltip/tooltip.d.ts';
import type WaCheckbox from '@home-assistant/webawesome/dist/components/checkbox/checkbox.d.ts';
import type { ListItemEl } from '@material/web/list/internal/listitem/list-item.d.ts';
import type { Ripple } from '@material/web/ripple/internal/ripple.d.ts';
import type * as _codemirror_view from '@codemirror/view';
import type { EditorView } from '@codemirror/view';
import type { Schema } from 'js-yaml';
import type Spinner from '@home-assistant/webawesome/dist/components/spinner/spinner.d.ts';
import type { LatLngTuple, Layer, Map, LatLngExpression } from 'leaflet';
import type { ContextType } from '@lit/context';
import type { HasSlotController } from '@home-assistant/webawesome/dist/internal/slot.d.ts';

declare global {
    interface HASSDomEvents {
        "location-changed": NavigateOptions;
    }
}
interface NavigateOptions {
    replace?: boolean;
    data?: any;
}

type WeekdayShort = "sun" | "mon" | "tue" | "wed" | "thu" | "fri" | "sat";

declare const _default: {
    panel: {
        demo: string;
        apps: string;
        energy: string;
        calendar: string;
        config: string;
        states: string;
        map: string;
        logbook: string;
        history: string;
        todo: string;
        media_browser: string;
        profile: string;
        light: string;
        security: string;
        climate: string;
        home: string;
        maintenance: string;
        notfound: string;
    };
    state: {
        default: {
            unknown: string;
            unavailable: string;
        };
    };
    state_badge: {
        default: {
            unknown: string;
            unavailable: string;
            error: string;
            entity_not_found: string;
        };
        alarm_control_panel: {
            armed: string;
            disarmed: string;
            armed_home: string;
            armed_away: string;
            armed_night: string;
            armed_vacation: string;
            armed_custom_bypass: string;
            pending: string;
            arming: string;
            disarming: string;
            triggered: string;
        };
        device_tracker: {
            home: string;
            not_home: string;
        };
        person: {
            home: string;
            not_home: string;
        };
    };
    groups: {
        owner: string;
        "system-admin": string;
        "system-users": string;
        "system-read-only": string;
    };
    config_entry: {
        disabled_by: {
            user: string;
            integration: string;
            config_entry: string;
            device: string;
        };
        hidden_by: {
            user: string;
            integration: string;
            device: string;
        };
    };
    ui: {
        backup: {
            upload_backup: string;
        };
        badge: {
            entity: {
                not_found: string;
            };
        };
        card: {
            common: {
                turn_on: string;
                turn_off: string;
                toggle: string;
                entity_not_found: string;
            };
            alarm_control_panel: {
                code: string;
                clear_code: string;
                disarm: string;
                arm: string;
                arm_home: string;
                arm_away: string;
                arm_night: string;
                arm_vacation: string;
                arm_custom_bypass: string;
                modes_label: string;
                modes: {
                    armed_away: string;
                    armed_home: string;
                    armed_night: string;
                    armed_vacation: string;
                    armed_custom_bypass: string;
                    disarmed: string;
                };
            };
            area: {
                area_not_found: string;
            };
            automation: {
                last_triggered: string;
                trigger: string;
            };
            button: {
                press: string;
            };
            camera: {
                not_available: string;
            };
            climate: {
                currently: string;
                on_off: string;
                target_temperature_entity: string;
                target_temperature_mode: string;
                current_temperature: string;
                heating: string;
                cooling: string;
                drying: string;
                fan: string;
                high: string;
                low: string;
                mode: string;
                preset: string;
                target_label: string;
                target: string;
                humidity_target: string;
            };
            counter: {
                actions: {
                    increment: string;
                    decrement: string;
                    reset: string;
                };
            };
            cover: {
                position: string;
                tilt_position: string;
                open_cover: string;
                close_cover: string;
                open_tilt_cover: string;
                close_tilt_cover: string;
                stop_cover: string;
            };
            date: {
                set_date: string;
            };
            fan: {
                preset_mode: string;
                oscillate: string;
                direction: string;
                forward: string;
                reverse: string;
                speed: {
                    low: string;
                    medium: string;
                    high: string;
                };
            };
            humidifier: {
                currently: string;
                humidity: string;
                state: string;
                mode: string;
                target_humidity_entity: string;
                current_humidity_entity: string;
                humidifying: string;
                drying: string;
                on_entity: string;
                target_label: string;
                target: string;
            };
            lawn_mower: {
                actions: {
                    resume_mowing: string;
                    start_mowing: string;
                    pause: string;
                    dock: string;
                };
            };
            light: {
                brightness: string;
                color_temperature: string;
                white_value: string;
                color_brightness: string;
                cold_white_value: string;
                warm_white_value: string;
                effect: string;
            };
            lock: {
                code: string;
                lock: string;
                unlock: string;
                open: string;
                open_door: string;
                open_door_confirm: string;
                open_door_done: string;
            };
            "home-summary": {
                all_lights_off: string;
                count_lights_on: string;
                count_locks_unlocked: string;
                count_alarms_disarmed: string;
                all_secure: string;
                no_media_playing: string;
                count_media_playing: string;
                count_maintenance_low_battery_issues: string;
                count_maintenance_issues_unavailable_battery_entities: string;
                all_maintenance_good: string;
                count_persons_home: string;
                nobody_home: string;
            };
            "toggle-group": {
                all_off: string;
                all_on: string;
                some_on: string;
            };
            "discovered-devices": {
                title: string;
                count_devices: string;
                no_devices: string;
            };
            repairs: {
                title: string;
                count_issues: string;
                no_issues: string;
            };
            updates: {
                title: string;
                count_updates: string;
                no_updates: string;
            };
            media_player: {
                source: string;
                sound_mode: string;
                browse_media: string;
                turn_on: string;
                turn_off: string;
                media_play: string;
                media_play_pause: string;
                media_pause: string;
                media_stop: string;
                media_next_track: string;
                media_previous_track: string;
                volume_up: string;
                volume_down: string;
                volume_mute: string;
                shuffle: string;
                repeat: string;
                media_volume_up: string;
                media_volume_down: string;
                media_volume_mute: string;
                media_volume_unmute: string;
                repeat_set: string;
                shuffle_set: string;
                text_to_speak: string;
                nothing_playing: string;
                join: string;
                media_players: string;
                select_all: string;
                idle: string;
                track_position: string;
            };
            persistent_notification: {
                dismiss: string;
            };
            scene: {
                activate: string;
            };
            script: {
                run: string;
                running_single: string;
                running_queued: string;
                running_parallel: string;
                cancel: string;
                cancel_multiple: string;
                cancel_all: string;
                idle: string;
                run_script: string;
            };
            service: {
                run: string;
            };
            select: {
                option: string;
            };
            update: {
                installing: string;
                installing_with_progress: string;
                up_to_date: string;
            };
            text: {
                empty_value: string;
            };
            timer: {
                actions: {
                    start: string;
                    pause: string;
                    cancel: string;
                    finish: string;
                };
            };
            vacuum: {
                actions: {
                    resume_cleaning: string;
                    return_to_base: string;
                    start_cleaning: string;
                    turn_on: string;
                    turn_off: string;
                };
            };
            valve: {
                position: string;
                open_valve: string;
                close_valve: string;
                stop_valve: string;
            };
            water_heater: {
                currently: string;
                on_off: string;
                target_temperature: string;
                away_mode: string;
                mode: string;
                target_label: string;
                target: string;
            };
            weather: {
                attributes: {
                    dew_point: string;
                    air_pressure: string;
                    humidity: string;
                    temperature: string;
                    visibility: string;
                    wind_speed: string;
                    precipitation: string;
                };
                cardinal_direction: {
                    e: string;
                    ene: string;
                    ese: string;
                    n: string;
                    ne: string;
                    nne: string;
                    nw: string;
                    nnw: string;
                    s: string;
                    se: string;
                    sse: string;
                    ssw: string;
                    sw: string;
                    w: string;
                    wnw: string;
                    wsw: string;
                };
                day: string;
                night: string;
                forecast: string;
                forecast_daily: string;
                forecast_hourly: string;
                forecast_twice_daily: string;
                daily: string;
                hourly: string;
                twice_daily: string;
                high: string;
                low: string;
            };
        };
        card_features: {
            area_controls: {
                light: {
                    on: string;
                    off: string;
                };
                fan: {
                    on: string;
                    off: string;
                };
                switch: {
                    on: string;
                    off: string;
                };
                "cover-awning": {
                    on: string;
                    off: string;
                };
                "cover-blind": {
                    on: string;
                    off: string;
                };
                "cover-curtain": {
                    on: string;
                    off: string;
                };
                "cover-damper": {
                    on: string;
                    off: string;
                };
                "cover-door": {
                    on: string;
                    off: string;
                };
                "cover-garage": {
                    on: string;
                    off: string;
                };
                "cover-gate": {
                    on: string;
                    off: string;
                };
                "cover-shade": {
                    on: string;
                    off: string;
                };
                "cover-shutter": {
                    on: string;
                    off: string;
                };
                "cover-window": {
                    on: string;
                    off: string;
                };
            };
        };
        common: {
            and: string;
            continue: string;
            previous: string;
            loading: string;
            refresh: string;
            cancel: string;
            delete: string;
            delete_all: string;
            download: string;
            duplicate: string;
            remove: string;
            enable: string;
            disable: string;
            update: string;
            hide: string;
            close: string;
            dismiss_alert: string;
            clear: string;
            leave: string;
            stay: string;
            next: string;
            back: string;
            undo: string;
            redo: string;
            move: string;
            save: string;
            apply: string;
            add: string;
            create: string;
            edit: string;
            edit_item: string;
            submit: string;
            rename: string;
            reset: string;
            search: string;
            ok: string;
            yes: string;
            no: string;
            not_now: string;
            skip: string;
            menu: string;
            overflow_menu: string;
            help: string;
            successfully_saved: string;
            successfully_deleted: string;
            deleting_failed: string;
            error_required: string;
            copied: string;
            copied_clipboard: string;
            name: string;
            optional: string;
            default: string;
            dont_save: string;
            copy: string;
            show: string;
            replace: string;
            append: string;
            supports_markdown: string;
            markdown: string;
        };
        components: {
            input: {
                clear: string;
                show_password: string;
                hide_password: string;
            };
            selectors: {
                serial_port: {
                    enter_manually: string;
                    device_in_area: string;
                    used_by: string;
                    type: {
                        recommended: string;
                        serial_proxy: string;
                        integration: string;
                        usb: string;
                        embedded: string;
                        unnamed: string;
                        not_recommended: string;
                    };
                };
                media: {
                    pick_media_player: string;
                    browse_not_supported: string;
                    pick_media: string;
                    browse_media: string;
                    manual: string;
                    media_content_id: string;
                    media_content_type: string;
                    media_content_id_detail: string;
                    media_content_type_detail: string;
                };
                file: {
                    upload_failed: string;
                    unknown_file: string;
                };
                image: {
                    image: string;
                    select_image_with_label: string;
                    upload: string;
                    url: string;
                };
                background: {
                    yaml_info: string;
                };
                location: {
                    latitude: string;
                    longitude: string;
                    radius: string;
                    radius_meters: string;
                };
                period: {
                    periods: {
                        none: string;
                        today: string;
                        tomorrow: string;
                        yesterday: string;
                        this_week: string;
                        last_week: string;
                        next_week: string;
                        this_month: string;
                        last_month: string;
                        next_month: string;
                        this_year: string;
                        last_year: string;
                        next_7d: string;
                        next_30d: string;
                    };
                };
                selector: {
                    options: string;
                    type: string;
                    multiple: string;
                    types: {
                        action: string;
                        area: string;
                        attribute: string;
                        boolean: string;
                        color_temp: string;
                        condition: string;
                        date: string;
                        datetime: string;
                        device: string;
                        duration: string;
                        entity: string;
                        floor: string;
                        icon: string;
                        location: string;
                        media: string;
                        number: string;
                        object: string;
                        color_rgb: string;
                        select: string;
                        state: string;
                        target: string;
                        template: string;
                        text: string;
                        theme: string;
                        time: string;
                        manual: string;
                    };
                };
                template: {
                    yaml_warning: string;
                    learn_more: string;
                };
                text: {
                    show_password: string;
                    hide_password: string;
                };
                numeric_threshold: {
                    unit: string;
                    number: string;
                    entity: string;
                    from: string;
                    to: string;
                    crossed: {
                        type: string;
                        above: string;
                        below: string;
                        between: string;
                        outside: string;
                    };
                    changed: {
                        type: string;
                        any: string;
                        above: string;
                        below: string;
                        between: string;
                        outside: string;
                    };
                    is: {
                        type: string;
                        above: string;
                        below: string;
                        between: string;
                        outside: string;
                    };
                };
                automation_behavior: {
                    trigger: {
                        options: {
                            each: {
                                label: string;
                                description: string;
                            };
                            first: {
                                label: string;
                                description: string;
                            };
                            all: {
                                label: string;
                                description: string;
                            };
                        };
                    };
                    condition: {
                        options: {
                            any: {
                                label: string;
                                description: string;
                            };
                            all: {
                                label: string;
                                description: string;
                            };
                        };
                    };
                };
            };
            logbook: {
                entries_not_found: string;
                triggered_by: string;
                triggered_by_automation: string;
                triggered_by_script: string;
                triggered_by_action: string;
                triggered_by_numeric_state_of: string;
                triggered_by_state_of: string;
                triggered_by_event: string;
                triggered_by_time: string;
                triggered_by_time_pattern: string;
                triggered_by_homeassistant_stopping: string;
                triggered_by_homeassistant_starting: string;
                numeric_state_of: string;
                state_of: string;
                event: string;
                time: string;
                time_pattern: string;
                homeassistant_stopping: string;
                homeassistant_starting: string;
                show_trace: string;
                retrieval_error: string;
                not_loaded: string;
                messages: {
                    was_away: string;
                    was_at_state: string;
                    rose: string;
                    set: string;
                    was_low: string;
                    was_normal: string;
                    was_connected: string;
                    was_disconnected: string;
                    was_opened: string;
                    was_closed: string;
                    is_opening: string;
                    is_opened: string;
                    is_closing: string;
                    was_unlocked: string;
                    was_locked: string;
                    is_unlocking: string;
                    is_locking: string;
                    is_jammed: string;
                    was_plugged_in: string;
                    was_unplugged: string;
                    was_at_home: string;
                    was_unsafe: string;
                    was_safe: string;
                    detected_device_class: string;
                    cleared_device_class: string;
                    turned_off: string;
                    turned_on: string;
                    changed_to_state: string;
                    became_unavailable: string;
                    became_unknown: string;
                    detected_tampering: string;
                    cleared_tampering: string;
                    detected_event: string;
                    detected_event_no_type: string;
                    detected_unknown_event: string;
                    detected_device_classes: {
                        battery: string;
                        battery_charging: string;
                        carbon_monoxide: string;
                        cold: string;
                        connectivity: string;
                        door: string;
                        garage_door: string;
                        gas: string;
                        heat: string;
                        light: string;
                        lock: string;
                        moisture: string;
                        motion: string;
                        moving: string;
                        occupancy: string;
                        opening: string;
                        plug: string;
                        power: string;
                        presence: string;
                        problem: string;
                        running: string;
                        safety: string;
                        smoke: string;
                        sound: string;
                        tamper: string;
                        update: string;
                        vibration: string;
                        window: string;
                    };
                    cleared_device_classes: {
                        battery: string;
                        battery_charging: string;
                        carbon_monoxide: string;
                        cold: string;
                        connectivity: string;
                        door: string;
                        garage_door: string;
                        gas: string;
                        heat: string;
                        light: string;
                        lock: string;
                        moisture: string;
                        motion: string;
                        moving: string;
                        occupancy: string;
                        opening: string;
                        plug: string;
                        power: string;
                        presence: string;
                        problem: string;
                        running: string;
                        safety: string;
                        smoke: string;
                        sound: string;
                        tamper: string;
                        update: string;
                        vibration: string;
                        window: string;
                    };
                };
            };
            entity: {
                "entity-picker": {
                    choose_entity: string;
                    entity: string;
                    add: string;
                    edit: string;
                    clear: string;
                    no_entities: string;
                    no_match: string;
                    show_entities: string;
                    new_entity: string;
                    placeholder: string;
                    create_helper: string;
                    unknown: string;
                };
                "entity-name-picker": {
                    types: {
                        floor: string;
                        area: string;
                        device: string;
                        entity: string;
                        area_missing: string;
                        floor_missing: string;
                        device_missing: string;
                    };
                    mode_composed: string;
                    mode_custom: string;
                    add: string;
                    search: string;
                    custom_name: string;
                };
                "entity-attribute-picker": {
                    attribute: string;
                    show_attributes: string;
                };
                "entity-state-picker": {
                    state: string;
                    add_custom_state: string;
                };
                "entity-state-content-picker": {
                    add: string;
                    custom_attribute: string;
                };
            };
            "target-picker": {
                expand: string;
                expand_floor_id: string;
                expand_area_id: string;
                expand_device_id: string;
                expand_label_id: string;
                add_target: string;
                remove: string;
                remove_floor_id: string;
                remove_area_id: string;
                remove_device_id: string;
                remove_entity_id: string;
                remove_label_id: string;
                floor_not_found: string;
                area_not_found: string;
                device_not_found: string;
                entity_not_found: string;
                label_not_found: string;
                devices_count: string;
                entities_count: string;
                target_details: string;
                no_targets: string;
                no_target_found: string;
                selected: {
                    entity: string;
                    device: string;
                    area: string;
                    label: string;
                    floor: string;
                };
                type: {
                    area: string;
                    areas: string;
                    device: string;
                    devices: string;
                    entity: string;
                    entities: string;
                    label: string;
                    labels: string;
                    floor: string;
                };
            };
            "subpage-data-table": {
                filters: string;
                show_results: string;
                clear_filter: string;
                close_filter: string;
                exit_selection_mode: string;
                enter_selection_mode: string;
                sort_by: string;
                group_by: string;
                dont_group_by: string;
                collapse_all_groups: string;
                expand_all_groups: string;
                select: string;
                selected: string;
                select_all: string;
                select_none: string;
                settings: string;
            };
            "config-entry-picker": {
                config_entry: string;
            };
            "conversation-agent-picker": {
                conversation_agent: string;
                none: string;
            };
            "country-picker": {
                country: string;
                no_match: string;
                no_countries: string;
            };
            "currency-picker": {
                currency: string;
                no_match: string;
                no_currencies: string;
            };
            "timezone-picker": {
                time_zone: string;
                no_match: string;
                no_timezones: string;
            };
            "pipeline-picker": {
                pipeline: string;
                preferred: string;
                last_used: string;
            };
            "theme-picker": {
                theme: string;
                no_theme: string;
            };
            "language-picker": {
                language: string;
                no_match: string;
                no_languages: string;
            };
            "tts-picker": {
                tts: string;
                none: string;
            };
            "tts-voice-picker": {
                voice: string;
                none: string;
            };
            "user-picker": {
                no_match: string;
                user: string;
                add_user: string;
                unknown: string;
            };
            "blueprint-picker": {
                select_blueprint: string;
            };
            "device-picker": {
                clear: string;
                toggle: string;
                show_devices: string;
                no_devices: string;
                no_match: string;
                device: string;
                unnamed_device: string;
                no_area: string;
                placeholder: string;
                unknown: string;
            };
            "category-picker": {
                clear: string;
                show_categories: string;
                categories: string;
                category: string;
                add_category: string;
                add_new_suggestion: string;
                add_new: string;
                no_categories: string;
                no_match: string;
                unknown: string;
                add_dialog: {
                    title: string;
                    text: string;
                    name: string;
                    add: string;
                    failed_create_category: string;
                };
            };
            "label-picker": {
                label: string;
                labels: string;
                add_new_suggestion: string;
                add_new: string;
                add: string;
                no_labels: string;
                no_match: string;
                failed_create_label: string;
            };
            "area-picker": {
                clear: string;
                show_areas: string;
                area: string;
                add_new_suggestion: string;
                add_new: string;
                no_areas: string;
                no_match: string;
                failed_create_area: string;
                unknown: string;
            };
            "floor-picker": {
                clear: string;
                show_floors: string;
                floor: string;
                add_new_suggestion: string;
                add_new: string;
                no_floors: string;
                no_match: string;
                failed_create_floor: string;
                unknown: string;
            };
            "area-filter": {
                title: string;
                no_areas: string;
                area_count: string;
                all_areas: string;
                show: string;
                hide: string;
            };
            "statistic-picker": {
                statistic: string;
                placeholder: string;
                no_statistics: string;
                no_match: string;
                no_state: string;
                missing_entity: string;
                learn_more: string;
                unknown: string;
            };
            "app-picker": {
                app: string;
                error: {
                    no_supervisor: string;
                    fetch_apps: string;
                };
            };
            "mount-picker": {
                mount: string;
                use_datadisk: string;
                error: {
                    no_supervisor: string;
                    fetch_mounts: string;
                };
            };
            "stt-picker": {
                stt: string;
                none: string;
            };
            "related-filter-menu": {
                filter: string;
                filter_by_entity: string;
                filter_by_device: string;
                filter_by_area: string;
                filtered_by_entity: string;
                filtered_by_device: string;
                filtered_by_area: string;
            };
            "file-upload": {
                uploading: string;
                uploading_name: string;
                label: string;
                secondary: string;
                unsupported_format: string;
            };
            "picture-upload": {
                label: string;
                clear_picture: string;
                current_image_alt: string;
                supported_formats: string;
                unsupported_format: string;
                secondary: string;
                select_media: string;
            };
            "color-picker": {
                default: string;
                state: string;
                none: string;
                custom_color: string;
                no_colors_found: string;
                colors: {
                    primary: string;
                    accent: string;
                    "primary-text": string;
                    "secondary-text": string;
                    disabled: string;
                    inactive: string;
                    red: string;
                    pink: string;
                    purple: string;
                    "deep-purple": string;
                    indigo: string;
                    blue: string;
                    "light-blue": string;
                    cyan: string;
                    teal: string;
                    green: string;
                    "light-green": string;
                    lime: string;
                    yellow: string;
                    amber: string;
                    orange: string;
                    "deep-orange": string;
                    brown: string;
                    "light-grey": string;
                    grey: string;
                    "dark-grey": string;
                    "blue-grey": string;
                    black: string;
                    white: string;
                };
            };
            "date-range-picker": {
                start_date: string;
                end_date: string;
                select: string;
                select_date_range: string;
                time_from: string;
                time_to: string;
                ranges: {
                    today: string;
                    yesterday: string;
                    "now-1h": string;
                    "now-12h": string;
                    "now-24h": string;
                    this_week: string;
                    this_quarter: string;
                    this_month: string;
                    "now-7d": string;
                    "now-30d": string;
                    "now-365d": string;
                    this_year: string;
                    "now-12m": string;
                };
            };
            "grid-size-picker": {
                reset_default: string;
                columns: string;
                rows: string;
            };
            relative_time: {
                never: string;
            };
            absolute_time: {
                never: string;
            };
            history_charts: {
                history_disabled: string;
                loading_history: string;
                no_history_found: string;
                error: string;
                duration: string;
                source_history: string;
                source_stats: string;
                zoom_reset: string;
                expand_legend: string;
                collapse_legend: string;
                toggle_visibility: string;
            };
            map: {
                error: string;
            };
            statistics_charts: {
                loading_statistics: string;
                no_statistics_found: string;
                statistic_types: {
                    min: string;
                    max: string;
                    mean: string;
                    state: string;
                    sum: string;
                    change: string;
                };
            };
            "service-picker": {
                action: string;
                no_match: string;
                unknown: string;
            };
            "service-control": {
                required: string;
                target: string;
                action_data: string;
                integration_doc: string;
                script_variables: string;
            };
            "related-items": {
                no_related_found: string;
                integration: string;
                device: string;
                area: string;
                entity: string;
                group: string;
                scene: string;
                script: string;
                automation: string;
                blueprint: string;
            };
            "data-table": {
                search: string;
                "no-data": string;
                filtering_by: string;
                hidden: string;
                clear: string;
                ungrouped: string;
                collapse: string;
                expand: string;
                settings: {
                    header: string;
                    hide: string;
                    show: string;
                    done: string;
                    restore: string;
                };
            };
            siren: {
                advanced_controls: string;
                tone: string;
                duration: string;
                volume: string;
            };
            "media-browser": {
                tts: {
                    message: string;
                    example_message: string;
                    language: string;
                    gender: string;
                    gender_male: string;
                    gender_female: string;
                    action_play: string;
                    action_pick: string;
                    set_as_default: string;
                    faild_to_store_defaults: string;
                    selected_voice_id: string;
                    copy_voice_id: string;
                };
                pick: string;
                play: string;
                "play-media": string;
                "pick-media": string;
                no_items: string;
                not_shown: string;
                choose_player: string;
                "media-player-browser": string;
                "web-browser": string;
                media_player: string;
                audio_not_supported: string;
                video_not_supported: string;
                media_not_supported: string;
                media_browsing_error: string;
                learn_adding_local_media: string;
                local_media_files: string;
                documentation: string;
                no_local_media_found: string;
                no_media_folder: string;
                setup_local_help: string;
                file_management: {
                    title: string;
                    manage: string;
                    no_items: string;
                    folders_not_supported: string;
                    highlight_button: string;
                    upload_failed: string;
                    add_media: string;
                    uploading: string;
                    confirm_delete: string;
                    delete: string;
                    deleting: string;
                    deselect_all: string;
                    select_all: string;
                    tip_media_storage: string;
                    tip_storage_panel: string;
                };
                class: {
                    album: string;
                    app: string;
                    artist: string;
                    channel: string;
                    composer: string;
                    contributing_artist: string;
                    directory: string;
                    episode: string;
                    game: string;
                    genre: string;
                    image: string;
                    movie: string;
                    music: string;
                    playlist: string;
                    podcast: string;
                    season: string;
                    track: string;
                    tv_show: string;
                    url: string;
                    video: string;
                };
                media_player_unavailable: string;
                auto: string;
                grid: string;
                list: string;
            };
            todo: {
                item: {
                    summary: string;
                    description: string;
                    add: string;
                    delete: string;
                    edit: string;
                    save: string;
                    due: string;
                    completed_time: string;
                    not_all_required_fields: string;
                    confirm_delete: {
                        delete: string;
                        prompt: string;
                    };
                };
            };
            calendar: {
                label: string;
                my_calendars: string;
                create_calendar: string;
                today: string;
                event_retrieval_error: string;
                event: {
                    add: string;
                    delete: string;
                    edit: string;
                    save: string;
                    all_day: string;
                    start: string;
                    end: string;
                    invalid_duration: string;
                    not_all_required_fields: string;
                    end_auto_adjusted: string;
                    confirm_delete: {
                        delete: string;
                        delete_this: string;
                        delete_future: string;
                        prompt: string;
                        recurring_prompt: string;
                    };
                    confirm_update: {
                        update: string;
                        update_this: string;
                        update_future: string;
                        recurring_prompt: string;
                    };
                    repeat: {
                        label: string;
                        freq: {
                            none: string;
                            label: string;
                            yearly: string;
                            monthly: string;
                            weekly: string;
                            daily: string;
                        };
                        interval: {
                            label: string;
                            monthly: string;
                            weekly: string;
                            daily: string;
                        };
                        monthly: {
                            label: string;
                        };
                        weekly: {
                            weekday: {
                                su: string;
                                mo: string;
                                tu: string;
                                we: string;
                                th: string;
                                fr: string;
                                sa: string;
                            };
                        };
                        end: {
                            label: string;
                            never: string;
                            after: string;
                            on: string;
                        };
                        end_on: {
                            label: string;
                        };
                        end_after: {
                            label: string;
                            ocurrences: string;
                        };
                    };
                    rrule: {
                        every: string;
                        years: string;
                        year: string;
                        months: string;
                        month: string;
                        weeks: string;
                        week: string;
                        weekdays: string;
                        weekday: string;
                        days: string;
                        day: string;
                        until: string;
                        for: string;
                        in: string;
                        on: string;
                        "on the": string;
                        and: string;
                        or: string;
                        at: string;
                        last: string;
                        time: string;
                        times: string;
                    };
                    summary: string;
                    description: string;
                    location: string;
                };
                views: {
                    dayGridMonth: string;
                    dayGridWeek: string;
                    dayGridDay: string;
                    listWeek: string;
                };
            };
            attributes: {
                expansion_header: string;
            };
            "qr-scanner": {
                select_camera: string;
                only_https_supported: string;
                not_supported: string;
                manual_input: string;
                enter_qr_code: string;
                retry: string;
                wrong_code: string;
                no_camera_found: string;
                app: {
                    title: string;
                    description: string;
                    alternativeOptionLabel: string;
                };
            };
            "climate-control": {
                temperature_up: string;
                temperature_down: string;
            };
            "yaml-editor": {
                copy_to_clipboard: string;
                syntax_error: string;
                error: string;
                error_location: string;
                enter_fullscreen: string;
                exit_fullscreen: string;
                find_and_replace: string;
                test_on: string;
                test_off: string;
            };
            "state-content-picker": {
                state: string;
                name: string;
                last_changed: string;
                last_updated: string;
                remaining_time: string;
                install_status: string;
                device_name: string;
                area_name: string;
                floor_name: string;
            };
            "multi-textfield": {
                add_item: string;
            };
            "items-display-editor": {
                show: string;
                hide: string;
            };
            "form-optional-actions": {
                add: string;
            };
            "combo-box": {
                no_match: string;
                no_items: string;
                unknown_item: string;
                search_or_custom: string;
                add_custom_item: string;
            };
            suggest_with_ai: {
                label: string;
                suggesting_1: string;
                suggesting_2: string;
                suggesting_3: string;
                done: string;
                error: string;
            };
            "navigation-picker": {
                add_custom_path: string;
                dashboards: string;
                related: string;
                views: string;
                area_settings: string;
                apps: string;
                other_routes: string;
                route: {
                    automations: string;
                    scenes: string;
                    scripts: string;
                    developer_tools: string;
                    integrations: string;
                    devices: string;
                    entities: string;
                };
            };
        };
        dialogs: {
            vacuum_segment_mapping: {
                title: string;
                no_segments: string;
                area_label: string;
                description: string;
            };
            codemirror: {
                open_documentation: string;
            };
            safe_mode: {
                title: string;
                text: string;
            };
            "quick-bar": {
                commands_title: string;
                navigate_title: string;
                commands: {
                    reload: {
                        all: string;
                        reload: string;
                        core: string;
                        group: string;
                        automation: string;
                        script: string;
                        scene: string;
                        person: string;
                        zone: string;
                        input_boolean: string;
                        input_button: string;
                        input_text: string;
                        input_number: string;
                        input_datetime: string;
                        input_select: string;
                        template: string;
                        universal: string;
                        rest: string;
                        command_line: string;
                        filter: string;
                        statistics: string;
                        generic: string;
                        generic_thermostat: string;
                        homekit: string;
                        min_max: string;
                        history_stats: string;
                        trend: string;
                        ping: string;
                        filesize: string;
                        telegram: string;
                        smtp: string;
                        mqtt: string;
                        rpi_gpio: string;
                        themes: string;
                    };
                    home_assistant_control: {
                        perform_action: string;
                        restart: string;
                        stop: string;
                    };
                    types: {
                        reload: string;
                        navigation: string;
                        app_settings: string;
                        home_assistant_control: string;
                    };
                    navigation: {
                        logs: string;
                        automation: string;
                        script: string;
                        integrations: string;
                        areas: string;
                        scene: string;
                        helpers: string;
                        tags: string;
                        person: string;
                        devices: string;
                        entities: string;
                        energy: string;
                        lovelace: string;
                        zone: string;
                        users: string;
                        info: string;
                        network: string;
                        updates: string;
                        repairs: string;
                        hardware: string;
                        storage: string;
                        general: string;
                        backups: string;
                        backup: string;
                        analytics: string;
                        system_health: string;
                        blueprint: string;
                        server_control: string;
                        system: string;
                        apps: string;
                        app_store: string;
                        app_info: string;
                        shortcuts: string;
                        labs: string;
                        "developer-tools": string;
                        matter: string;
                        zha: string;
                        zwave_js: string;
                        thread: string;
                        bluetooth: string;
                        knx: string;
                        insteon: string;
                        "voice-assistants": string;
                        "ai-tasks": string;
                    };
                };
                filter_placeholder: string;
                filter_placeholder_devices: string;
                title: string;
                key_c_tip: string;
                nothing_found: string;
            };
            voice_command: {
                title: string;
                did_not_hear: string;
                did_not_understand: string;
                found: string;
                error: string;
                conversation_no_control: string;
                how_can_i_help: string;
                input_label: string;
                send_text: string;
                start_listening: string;
                manage_assistants: string;
                not_supported_microphone_browser: string;
                not_supported_microphone_documentation: string;
                not_supported_microphone_documentation_link: string;
                unknown_error_load_assist: string;
                not_found_error_load_assist: string;
                show_details: string;
            };
            generic: {
                default_confirmation_title: string;
            };
            image_cropper: {
                crop: string;
                crop_image: string;
                use_original: string;
            };
            "date-picker": {
                title: string;
                today: string;
                clear: string;
            };
            more_info_control: {
                settings: string;
                edit: string;
                edit_domain: {
                    automation: string;
                    script: string;
                    scene: string;
                    person: string;
                };
                details: string;
                toggle_yaml_mode: string;
                translated: string;
                raw: string;
                back_to_info: string;
                info: string;
                related: string;
                attributes: string;
                history: string;
                aggregate: string;
                logbook: string;
                device_or_service_info: string;
                device_type: {
                    device: string;
                    service: string;
                };
                last_changed: string;
                last_updated: string;
                show_more: string;
                exit_edit_mode: string;
                script: {
                    last_action: string;
                    last_triggered: string;
                };
                add_to: {
                    title: string;
                    item: string;
                    action_options: {
                        automation_trigger: string;
                        automation_condition: string;
                        automation_action: string;
                        script_action: string;
                        scene: string;
                    };
                    automations_heading: string;
                    scripts_heading: string;
                    app_actions: string;
                    no_actions: string;
                    action_failed: string;
                };
                sun: {
                    azimuth: string;
                    elevation: string;
                    rising: string;
                    setting: string;
                };
                update: {
                    release_announcement: string;
                    skip: string;
                    clear_skipped: string;
                    install: string;
                    update: string;
                    auto_update_enabled_title: string;
                    auto_update_enabled_text: string;
                    create_backup: {
                        automatic: string;
                        automatic_description_last: string;
                        automatic_description_none: string;
                        manual: string;
                        manual_description: string;
                        app: string;
                        app_description: string;
                        generic: string;
                    };
                };
                updater: {
                    title: string;
                };
                remote: {
                    activity: string;
                };
                restored: {
                    no_longer_provided: string;
                };
                vacuum: {
                    status: string;
                    commands: string;
                    fan_speed: string;
                    start: string;
                    pause: string;
                    stop: string;
                    clean_spot: string;
                    locate: string;
                    return_home: string;
                    start_pause: string;
                    clean_areas: string;
                    cleaning: string;
                    by_area: string;
                    start_cleaning_areas: string;
                    no_areas_header: string;
                    no_areas_text: string;
                    no_areas_text_non_admin: string;
                    configure_area_mapping: string;
                    configure: string;
                    clean_areas_order_hint: string;
                    other_areas: string;
                };
                person: {
                    create_zone: string;
                };
                cover: {
                    edit_mode: string;
                    reset_favorites: string;
                    reset_favorites_text: string;
                    copy_favorites: string;
                    copy_favorites_helper: string;
                    copy_favorites_entities: string;
                    switch_mode: {
                        button: string;
                        position: string;
                    };
                    favorite_position: {
                        set: string;
                        edit: string;
                        delete: string;
                        delete_confirm_title: string;
                        delete_confirm_text: string;
                        delete_confirm_action: string;
                        add: string;
                        edit_title: string;
                        add_title: string;
                    };
                    favorite_tilt_position: {
                        set: string;
                        edit: string;
                        delete: string;
                        delete_confirm_title: string;
                        delete_confirm_text: string;
                        delete_confirm_action: string;
                        add: string;
                        edit_title: string;
                        add_title: string;
                    };
                };
                zone: {
                    graph_unit: string;
                };
                light: {
                    edit_mode: string;
                    reset_favorites: string;
                    reset_favorites_text: string;
                    copy_favorites: string;
                    copy_favorites_helper: string;
                    copy_favorites_entities: string;
                    toggle: string;
                    color: string;
                    color_temp: string;
                    set_white: string;
                    select_effect: string;
                    color_picker: {
                        title: string;
                        mode: {
                            color: string;
                            color_temp: string;
                        };
                    };
                    favorite_color: {
                        set: string;
                        edit: string;
                        delete: string;
                        delete_confirm_title: string;
                        delete_confirm_text: string;
                        delete_confirm_action: string;
                        add: string;
                        edit_title: string;
                        add_title: string;
                    };
                };
                fan: {
                    set_forward_direction: string;
                    set_reverse_direction: string;
                    turn_on_oscillating: string;
                    turn_off_oscillating: string;
                };
                climate: {
                    temperature: string;
                    humidity: string;
                };
                lawn_mower: {
                    activity: string;
                    commands: string;
                    start_mowing: string;
                    pause: string;
                    dock: string;
                };
                valve: {
                    edit_mode: string;
                    reset_favorites: string;
                    reset_favorites_text: string;
                    copy_favorites: string;
                    copy_favorites_helper: string;
                    copy_favorites_entities: string;
                    switch_mode: {
                        button: string;
                        position: string;
                    };
                    favorite_position: {
                        set: string;
                        edit: string;
                        delete: string;
                        delete_confirm_title: string;
                        delete_confirm_text: string;
                        delete_confirm_action: string;
                        add: string;
                        edit_title: string;
                        add_title: string;
                    };
                };
                camera: {
                    download_snapshot: string;
                    failed_to_download: string;
                };
            };
            entity_registry: {
                settings: string;
                control: string;
                related: string;
                no_unique_id: string;
                faq: string;
                editor: {
                    name: string;
                    icon: string;
                    icon_error: string;
                    default_code: string;
                    default_code_error: string;
                    calendar_color: string;
                    associated_zone: string;
                    entity_id: string;
                    unit_of_measurement: string;
                    precipitation_unit: string;
                    precision: string;
                    precision_default: string;
                    pressure_unit: string;
                    temperature_unit: string;
                    visibility_unit: string;
                    wind_speed_unit: string;
                    device_class: string;
                    switch_as_x: string;
                    invert: {
                        label: string;
                        descriptions: {
                            cover: string;
                            lock: string;
                            valve: string;
                        };
                    };
                    device_classes: {
                        binary_sensor: {
                            door: string;
                            garage_door: string;
                            window: string;
                            opening: string;
                            battery: string;
                            battery_charging: string;
                            carbon_monoxide: string;
                            cold: string;
                            connectivity: string;
                            gas: string;
                            heat: string;
                            light: string;
                            lock: string;
                            moisture: string;
                            motion: string;
                            moving: string;
                            occupancy: string;
                            plug: string;
                            power: string;
                            presence: string;
                            problem: string;
                            running: string;
                            safety: string;
                            smoke: string;
                            sound: string;
                            tamper: string;
                            update: string;
                            vibration: string;
                        };
                        cover: {
                            door: string;
                            garage: string;
                            gate: string;
                            window: string;
                            shade: string;
                            awning: string;
                            blind: string;
                            curtain: string;
                            damper: string;
                            shutter: string;
                        };
                        switch: {
                            outlet: string;
                        };
                    };
                    unavailable: string;
                    entity_status: string;
                    change_area: string;
                    enabled_label: string;
                    disabled_label: string;
                    enabled_cause: string;
                    visible_label: string;
                    hidden_cause: string;
                    device_disabled: string;
                    entity_disabled: string;
                    enable_entity: string;
                    open_device_settings: string;
                    device_name_tip: string;
                    switch_as_x_confirm: string;
                    switch_as_x_remove_confirm: string;
                    switch_as_x_change_confirm: string;
                    enabled_description: string;
                    enabled_delay_confirm: string;
                    enabled_restart_confirm: string;
                    hidden_explanation: string;
                    delete: string;
                    confirm_delete_title: string;
                    confirm_delete: string;
                    confirm_delete_related: string;
                    confirm_delete_count: {
                        automation: string;
                        script: string;
                        group: string;
                        scene: string;
                    };
                    update: string;
                    note: string;
                    use_device_area: string;
                    change_device_settings: string;
                    change_device_area_link: string;
                    configure_state: string;
                    configure_state_secondary: string;
                    stream: {
                        preload_stream: string;
                        preload_stream_description: string;
                        stream_orientation: string;
                        stream_orientation_description: string;
                        stream_orientation_1: string;
                        stream_orientation_2: string;
                        stream_orientation_3: string;
                        stream_orientation_4: string;
                        stream_orientation_5: string;
                        stream_orientation_6: string;
                        stream_orientation_7: string;
                        stream_orientation_8: string;
                    };
                    voice_assistants: string;
                    no_aliases: string;
                };
            };
            recreate_entity_ids: {
                confirm_rename_title: string;
                confirm_rename_warning: string;
                will_rename: string;
                new: string;
                old: string;
                cant_rename: string;
                wont_change: string;
                update_entity_error: string;
                confirm_no_renamable_entity_ids: string;
            };
            "device-registry-detail": {
                name: string;
                enabled_label: string;
                enabled_cause: string;
                type: {
                    device_heading: string;
                    device: string;
                    service_heading: string;
                    service: string;
                };
                enabled_description: string;
                update: string;
                unknown_error: string;
            };
            "label-detail": {
                new_label: string;
                name: string;
                icon: string;
                color: string;
                description: string;
                required_error_msg: string;
            };
            "voice-settings": {
                expose_header: string;
                aliases_header: string;
                aliases_description: string;
                aliases_no_unique_id: string;
                entity_name_alias_description: string;
                ask_pin: string;
                manual_config: string;
                unsupported: string;
                view_entity: string;
            };
            restart: {
                heading: string;
                advanced_options: string;
                backup_in_progress: string;
                upload_in_progress: string;
                restore_in_progress: string;
                wait_for_backup: string;
                error_backup_state: string;
                wait_for_upload: string;
                wait_for_restore: string;
                reload: {
                    title: string;
                    description: string;
                    reloading: string;
                    failed: string;
                };
                restart: {
                    title: string;
                    description: string;
                    confirm_title: string;
                    confirm_description: string;
                    confirm_action: string;
                    confirm_action_backup: string;
                    failed: string;
                };
                stop: {
                    confirm_title: string;
                    confirm_description: string;
                    confirm_action: string;
                };
                reboot: {
                    title: string;
                    description: string;
                    confirm_title: string;
                    confirm_description: string;
                    confirm_action: string;
                    action_toast: string;
                    confirm_action_backup: string;
                    failed: string;
                };
                shutdown: {
                    title: string;
                    description: string;
                    confirm_title: string;
                    confirm_description: string;
                    confirm_action: string;
                    confirm_action_backup: string;
                    action_toast: string;
                    failed: string;
                };
                "restart-safe-mode": {
                    title: string;
                    description: string;
                    confirm_title: string;
                    confirm_description: string;
                    confirm_action: string;
                    confirm_action_backup: string;
                    failed: string;
                };
            };
            aliases: {
                heading: string;
                label: string;
                remove: string;
                save: string;
                add: string;
                no_aliases: string;
                update: string;
                unknown_error: string;
            };
            helper_settings: {
                platform_not_loaded: string;
                yaml_not_editable: string;
                required_error_msg: string;
                generic: {
                    name: string;
                    icon: string;
                    advanced_settings: string;
                };
                input_datetime: {
                    date: string;
                    time: string;
                    datetime: string;
                    mode: string;
                };
                input_text: {
                    min: string;
                    max: string;
                    mode: string;
                    text: string;
                    password: string;
                    pattern_label: string;
                    pattern_helper: string;
                };
                input_number: {
                    min: string;
                    max: string;
                    mode: string;
                    box: string;
                    slider: string;
                    step: string;
                    unit_of_measurement: string;
                };
                input_select: {
                    options: string;
                    add_option: string;
                    remove_option: string;
                    no_options: string;
                    add: string;
                    confirm_delete: {
                        delete: string;
                        prompt: string;
                    };
                };
                counter: {
                    minimum: string;
                    maximum: string;
                    initial: string;
                    restore: string;
                    step: string;
                };
                timer: {
                    duration: string;
                    restore: string;
                };
                schedule: {
                    delete: string;
                    confirm_delete: string;
                    edit_schedule_block: string;
                    start: string;
                    end: string;
                    data: string;
                };
                template: {
                    time: string;
                    all_listeners: string;
                    no_listeners: string;
                    listeners: string;
                    entity: string;
                    domain: string;
                };
            };
            options_flow: {
                form: {
                    header: string;
                };
                loading: {
                    loading_flow: string;
                    loading_step: string;
                };
                success: {
                    description: string;
                };
            };
            repair_flow: {
                form: {
                    header: string;
                };
                loading: {
                    loading_flow: string;
                    loading_step: string;
                };
                success: {
                    description: string;
                };
            };
            config_entry_system_options: {
                title: string;
                enable_new_entities_label: string;
                enable_new_entities_description: string;
                enable_polling_label: string;
                enable_polling_description: string;
                restart_home_assistant: string;
                update: string;
            };
            zha_reconfigure_device: {
                heading: string;
                configuring_alt: string;
                introduction: string;
                battery_device_warning: string;
                run_in_background: string;
                start_reconfiguration: string;
                in_progress: string;
                configuration_failed: string;
                configuration_complete: string;
                button_show: string;
                button_hide: string;
                cluster_header: string;
                bind_header: string;
                reporting_header: string;
                attribute: string;
                min_max_change: string;
            };
            zha_manage_device: {
                heading: string;
                tabs: {
                    clusters: string;
                    bindings: string;
                    signature: string;
                    neighbors: string;
                };
            };
            zha_device_info: {
                manuf: string;
                no_area: string;
                device_signature: string;
                device_children: string;
                buttons: {
                    add: string;
                    remove: string;
                    manage: string;
                    reconfigure: string;
                    view_network: string;
                };
                services: {
                    reconfigure: string;
                    updateDeviceName: string;
                    remove: string;
                    zigbee_information: string;
                };
                confirmations: {
                    remove_title: string;
                    remove_text: string;
                };
                quirk: string;
                last_seen: string;
                power_source: string;
                unknown: string;
                zha_device_card: {
                    device_name_placeholder: string;
                };
            };
            mqtt_device_debug_info: {
                title: string;
                deserialize: string;
                entities: string;
                no_entity_debug_info: string;
                no_trigger_debug_info: string;
                payload_display: string;
                recent_messages: string;
                recent_tx_messages: string;
                show_as_yaml: string;
                triggers: string;
            };
            unsupported: {
                title: string;
                description: string;
                reasons: {
                    apparmor: string;
                    content_trust: string;
                    dbus: string;
                    docker_configuration: string;
                    docker_version: string;
                    job_conditions: string;
                    lxc: string;
                    network_manager: string;
                    os: string;
                    os_agent: string;
                    privileged: string;
                    software: string;
                    source_mods: string;
                    systemd: string;
                    systemd_resolved: string;
                };
            };
            unhealthy: {
                title: string;
                description: string;
                reasons: {
                    docker: string;
                    oserror_bad_message: string;
                    duplicate_os_installation: string;
                    privileged: string;
                    supervisor: string;
                    setup: string;
                    untrusted: string;
                };
            };
            join_beta_channel: {
                title: string;
                backup: string;
                warning: string;
                release_items: string;
                view_documentation: string;
                join: string;
            };
            enter_code: {
                title: string;
                input_label: string;
            };
            "tts-try": {
                header: string;
                message: string;
                message_example: string;
                message_placeholder: string;
                play: string;
            };
            update_backup: {
                title: string;
                text: string;
                create: string;
            };
            "matter-add-device": {
                add_device: string;
                add_device_failed: string;
                commissioning: {
                    header: string;
                    note: string;
                };
                main: {
                    header: string;
                    question: string;
                    answer_new: string;
                    answer_new_description: string;
                    answer_existing: string;
                    answer_existing_description: string;
                };
                new: {
                    header: string;
                    note: string;
                    download_app: string;
                    playstore: string;
                    appstore: string;
                };
                existing: {
                    header: string;
                    question: string;
                    answer_google_home: string;
                    answer_apple_home: string;
                    answer_generic: string;
                };
                google_home: {
                    header: string;
                    step_1: string;
                    step_2: string;
                    step_3: string;
                    linked_matter_apps_services: string;
                    link_apps_services: string;
                    no_home_assistant: string;
                    redirect: string;
                };
                google_home_fallback: {
                    header: string;
                    step_1: string;
                    step_2: string;
                    step_3: string;
                    linked_matter_apps_services: string;
                    link_apps_services: string;
                    use_pairing_code: string;
                    pairing_code: string;
                    code_instructions: string;
                };
                apple_home: {
                    header: string;
                    step_1: string;
                    step_2: string;
                    step_3: string;
                    accessory_settings: string;
                    turn_on_pairing_mode: string;
                    setup_code: string;
                    code_instructions: string;
                };
                generic: {
                    header: string;
                    code_instructions: string;
                    setup_code: string;
                };
                device_added: {
                    header: string;
                    finish: string;
                    skip: string;
                };
            };
            shortcuts: {
                title: string;
                enable_shortcuts_hint: string;
                enable_shortcuts_hint_user_profile: string;
                keys: {
                    del: string;
                    ctrl: string;
                };
                shortcuts: {
                    double_click: string;
                    click: string;
                    scroll_wheel: string;
                    drag: string;
                };
                searching: {
                    title: string;
                    on_any_page: string;
                    on_pages_with_tables: string;
                    search: string;
                    search_command: string;
                    search_entities: string;
                    search_devices: string;
                    search_in_table: string;
                };
                assist: {
                    title: string;
                    open_assist: string;
                };
                automation_script: {
                    title: string;
                    copy: string;
                    cut: string;
                    delete: string;
                    paste: string;
                    save: string;
                    undo: string;
                    redo: string;
                };
                charts: {
                    title: string;
                    drag_to_zoom: string;
                    scroll_to_zoom: string;
                    double_click: string;
                    click_legend_solo: string;
                };
                other: {
                    title: string;
                    my_link: string;
                    show_shortcuts: string;
                };
            };
        };
        weekdays: {
            monday: string;
            tuesday: string;
            wednesday: string;
            thursday: string;
            friday: string;
            saturday: string;
            sunday: string;
        };
        errors: {
            config: {
                visual_editor_not_supported: string;
                visual_editor_not_supported_reason_type: string;
                edit_in_yaml_supported: string;
                configuration_error: string;
                configuration_warning: string;
                configuration_error_reason: string;
                no_type_provided: string;
                editor_not_supported: string;
                key_missing: string;
                key_not_expected: string;
                key_wrong_type: string;
                no_template_editor_support: string;
                media_query_not_supported: string;
            };
            supervisor: {
                title: string;
                wait: string;
                ask: string;
                reboot: string;
                observer: string;
                system_health: string;
            };
        };
        "login-form": {
            password: string;
            remember: string;
            log_in: string;
        };
        notification_drawer: {
            click_to_configure: string;
            empty: string;
            title: string;
            close: string;
            dismiss_all: string;
        };
        notification_toast: {
            action_failed: string;
            connection_lost: string;
            started: string;
            starting: string;
            wrapping_up_startup: string;
            integration_starting: string;
            triggered: string;
            dismiss: string;
            no_matching_link_found: string;
            new_version_available: string;
            reload: string;
            theme_save_failed: string;
            theme_preferences_unavailable: string;
        };
        sidebar: {
            external_app_configuration: string;
            sidebar_toggle: string;
            edit_sidebar: string;
            edit_subtitle: string;
            migrate_to_user_data: string;
            reset_to_defaults: string;
            reset_confirmation: string;
        };
        panel: {
            app: {
                error_app_not_installed: string;
                error_app_no_ingress: string;
                error_app_not_running: string;
                start_app: string;
                app_starting: string;
                error_starting_app: string;
                error_creating_session: string;
                error_app_not_ready: string;
                retry: string;
            };
            home: {
                editor: {
                    title: string;
                    description: string;
                    personalize: string;
                    personalize_description: string;
                    suggested_entities: string;
                    suggested_entities_description: string;
                    suggested_entities_disabled_description: string;
                    save_failed: string;
                    areas_hint: string;
                    areas_page: string;
                    welcome_message: string;
                    welcome_message_helper: string;
                    summaries: string;
                    summaries_description: string;
                    add_custom_shortcut: string;
                    edit_shortcut: string;
                    shortcut: {
                        path: string;
                        label: string;
                        icon: string;
                        color: string;
                    };
                };
                new_overview_dialog: {
                    title: string;
                    description: string;
                    whats_new: string;
                    automatic_organization: string;
                    automatic_organization_description: string;
                    favorites: string;
                    favorites_description: string;
                    existing_dashboards: string;
                    existing_dashboards_description: string;
                    dashboard_settings: string;
                    ok_understood: string;
                };
                banner: {
                    welcome_message: string;
                    learn_more: string;
                };
            };
            my: {
                not_supported: string;
                component_not_loaded: string;
                no_supervisor: string;
                not_app: string;
                url_error: string;
                documentation: string;
                download_app: string;
                faq_link: string;
                error: string;
            };
            config: {
                generic: {
                    headers: {
                        entity_id: string;
                        domain: string;
                        area: string;
                        floor: string;
                        category: string;
                        assistants: string;
                        editable: string;
                        modified_at: string;
                        created_at: string;
                        actions: string;
                    };
                };
                header: string;
                dashboard: {
                    devices: {
                        main: string;
                        secondary: string;
                    };
                    automations: {
                        main: string;
                        secondary: string;
                    };
                    backup: {
                        main: string;
                        secondary: string;
                    };
                    apps: {
                        main: string;
                        secondary: string;
                    };
                    dashboards: {
                        main: string;
                        secondary: string;
                    };
                    voice_assistants: {
                        main: string;
                        secondary: string;
                    };
                    energy: {
                        main: string;
                        secondary: string;
                    };
                    tags: {
                        main: string;
                        secondary: string;
                    };
                    people: {
                        main: string;
                        secondary: string;
                    };
                    areas: {
                        main: string;
                        secondary: string;
                    };
                    companion: {
                        main: string;
                        secondary: string;
                    };
                    system: {
                        main: string;
                        secondary: string;
                    };
                    developer_tools: {
                        main: string;
                        secondary: string;
                    };
                    about: {
                        main: string;
                        secondary: string;
                    };
                    cloud: {
                        secondary: string;
                    };
                    zwave_js: {
                        main: string;
                        secondary: string;
                    };
                    zha: {
                        main: string;
                        secondary: string;
                    };
                    matter: {
                        main: string;
                        secondary: string;
                    };
                    thread: {
                        main: string;
                        secondary: string;
                    };
                    bluetooth: {
                        main: string;
                        secondary: string;
                    };
                    knx: {
                        main: string;
                        secondary: string;
                    };
                    insteon: {
                        main: string;
                        secondary: string;
                    };
                };
                common: {
                    quick_links: {
                        devices: string;
                        entities: string;
                        helpers: string;
                        automations: string;
                        scenes: string;
                        scripts: string;
                    };
                    editor: {
                        confirm_unsaved: string;
                    };
                    multiselect: {
                        failed: string;
                    };
                    learn_more: string;
                    show_url: string;
                    hide_url: string;
                    copy_link: string;
                    graph: {
                        toggle_physics: string;
                        toggle_labels: string;
                    };
                };
                updates: {
                    caption: string;
                    description: string;
                    no_updates: string;
                    no_update_entities: {
                        title: string;
                        description: string;
                    };
                    check_updates: string;
                    no_new_updates: string;
                    updates_refreshed: string;
                    checking_updates: string;
                    title: string;
                    title_not_installable: string;
                    unable_to_fetch: string;
                    more_updates: string;
                    show: string;
                    show_skipped: string;
                    join_beta: string;
                    leave_beta: string;
                    skipped: string;
                    update_in_progress: string;
                    no_area: string;
                };
                repairs: {
                    caption: string;
                    description: string;
                    title: string;
                    no_repairs: string;
                    more_repairs: string;
                    show_ignored: string;
                    critical: string;
                    error: string;
                    warning: string;
                    system_information: string;
                    integration_startup_time: string;
                    copy: string;
                    reported_by: string;
                    created_at_by: string;
                    dialog: {
                        title: string;
                        fix: string;
                        learn: string;
                        ignore: string;
                        unignore: string;
                        breaks_in_version: string;
                        ignored_in_version_short: string;
                        ignored_in_version: string;
                    };
                };
                floors: {
                    editor: {
                        create_floor: string;
                        update_floor: string;
                        delete: string;
                        name: string;
                        icon: string;
                        level: string;
                        level_helper: string;
                        name_required: string;
                        floor_id: string;
                        unknown_error: string;
                        aliases_section: string;
                        no_aliases: string;
                        configured_aliases: string;
                        aliases_description: string;
                        areas_section: string;
                        areas_description: string;
                        add_area: string;
                    };
                };
                ai_task: {
                    header: string;
                    description: string;
                    gen_data_header: string;
                    gen_data_description: string;
                    gen_image_header: string;
                    gen_image_description: string;
                };
                apps: {
                    caption: string;
                    description: string;
                    error_loading: string;
                    info: {
                        what_is_an_app: string;
                        what_is_an_app_description: string;
                        why_not_available: string;
                        why_not_available_description: string;
                        installation_hint: string;
                        learn_more: string;
                        dismiss: string;
                    };
                    state: {
                        update_available: string;
                        updating: string;
                        installed: string;
                        not_installed: string;
                        not_available: string;
                    };
                    installed: {
                        search: string;
                        no_apps: string;
                        add_app: string;
                        app_stopped: string;
                        app_update_available: string;
                        app_running: string;
                    };
                    store: {
                        title: string;
                        check_updates: string;
                        repositories: string;
                        registries: string;
                        no_results_found: string;
                    };
                    repositories: {
                        maintainer: string;
                        url: string;
                        confirm_remove: string;
                        add_title: string;
                        add: string;
                        remove: string;
                        used: string;
                        no_repositories: string;
                    };
                    registries: {
                        add_title: string;
                        add: string;
                        username: string;
                        remove: string;
                        confirm_remove: string;
                        no_registries: string;
                        failed_to_add: string;
                        failed_to_remove: string;
                        registry: string;
                        password: string;
                    };
                    my: {
                        add_repository_title: string;
                        add_repository_description: string;
                        error_repository_not_found: string;
                    };
                    panel: {
                        info: string;
                        documentation: string;
                        configuration: string;
                        log: string;
                    };
                    dashboard: {
                        cpu_usage: string;
                        ram_usage: string;
                        controls: string;
                        app_running: string;
                        app_stopped: string;
                        current_version: string;
                        changelog: string;
                        hostname: string;
                        visit_app_page: string;
                        start: string;
                        stop: string;
                        restart: string;
                        rebuild: string;
                        uninstall: string;
                        install: string;
                        open_web_ui: string;
                        failed_to_save: string;
                        failed_to_reset: string;
                        failed_to_restart: string;
                        uninstalling: string;
                        protection_mode: {
                            title: string;
                            content: string;
                            enable: string;
                        };
                        system_managed: {
                            title: string;
                            description: string;
                            take_control: string;
                            badge: string;
                        };
                        option: {
                            boot: {
                                title: string;
                                description: string;
                            };
                            watchdog: {
                                title: string;
                                description: string;
                            };
                            auto_update: {
                                title: string;
                                description: string;
                            };
                            ingress_panel: {
                                title: string;
                                description: string;
                            };
                            protected: {
                                title: string;
                                description: string;
                            };
                        };
                        capability: {
                            stages: {
                                experimental: string;
                                deprecated: string;
                            };
                            state: {
                                started: string;
                                stopped: string;
                                error: string;
                                startup: string;
                                unknown: string;
                            };
                            label: {
                                rating: string;
                                host: string;
                                hardware: string;
                                core: string;
                                docker: string;
                                host_pid: string;
                                apparmor: string;
                                auth: string;
                                ingress: string;
                                signed: string;
                            };
                            role: {
                                manager: string;
                                default: string;
                                homeassistant: string;
                                backup: string;
                                admin: string;
                            };
                            stage: {
                                title: string;
                                description: string;
                            };
                            rating: {
                                title: string;
                                description: string;
                            };
                            host_network: {
                                title: string;
                                description: string;
                            };
                            full_access: {
                                title: string;
                                description: string;
                            };
                            homeassistant_api: {
                                title: string;
                                description: string;
                            };
                            hassio_api: {
                                title: string;
                                description: string;
                            };
                            docker_api: {
                                title: string;
                                description: string;
                            };
                            host_pid: {
                                title: string;
                                description: string;
                            };
                            apparmor: {
                                title: string;
                                description: string;
                            };
                            auth_api: {
                                title: string;
                                description: string;
                            };
                            ingress: {
                                title: string;
                                description: string;
                            };
                            signed: {
                                title: string;
                                description: string;
                            };
                        };
                        action_error: {
                            install: string;
                            start: string;
                            stop: string;
                            restart: string;
                            rebuild: string;
                            uninstall: string;
                            get_changelog: string;
                            start_invalid_config: string;
                            go_to_config: string;
                            validate_config: string;
                            view_supervisor_logs: string;
                        };
                        uninstall_dialog: {
                            title: string;
                            remove_data: string;
                            uninstall: string;
                        };
                        restart_dialog: {
                            title: string;
                            text: string;
                            restart: string;
                        };
                        update_available: {
                            update_name: string;
                            no_update: string;
                            description: string;
                            updating: string;
                            create_backup: {
                                app: string;
                                app_description: string;
                                generic: string;
                            };
                        };
                    };
                    configuration: {
                        no_configuration: string;
                        reset_defaults: string;
                        options: {
                            header: string;
                            edit_in_ui: string;
                            edit_in_yaml: string;
                            invalid_yaml: string;
                            show_unused_optional: string;
                        };
                        network: {
                            header: string;
                            introduction: string;
                            show_disabled: string;
                            reset_defaults: string;
                        };
                        audio: {
                            header: string;
                            input: string;
                            output: string;
                            default: string;
                            failed_to_load_hardware: string;
                            failed_to_save: string;
                        };
                        confirm: {
                            reset_options: {
                                title: string;
                                text: string;
                            };
                        };
                    };
                    documentation: {
                        get_documentation: string;
                    };
                };
                category: {
                    caption: string;
                    assign: {
                        edit: string;
                        assign: string;
                        unknown_error: string;
                    };
                    editor: {
                        edit: string;
                        delete: string;
                        add: string;
                        create: string;
                        name: string;
                        icon: string;
                        required_error_msg: string;
                        unknown_error: string;
                        confirm_delete: string;
                        confirm_delete_text: string;
                    };
                    filter: {
                        show_all: string;
                    };
                };
                labels: {
                    caption: string;
                    description: string;
                    headers: {
                        name: string;
                        description: string;
                        icon: string;
                        color: string;
                    };
                    add_label: string;
                    manage_labels: string;
                    no_labels: string;
                    introduction: string;
                    introduction2: string;
                    confirm_remove_title: string;
                    confirm_remove: string;
                };
                areas: {
                    caption: string;
                    description: string;
                    edit_settings: string;
                    quick_links: {
                        devices: string;
                        entities: string;
                        helpers: string;
                        automations: string;
                        scenes: string;
                        scripts: string;
                    };
                    add_picture: string;
                    assigned_to_area: string;
                    targeting_area: string;
                    area_not_found: string;
                    data_table: {
                        area: string;
                        devices: string;
                        entities: string;
                    };
                    picker: {
                        header: string;
                        introduction: string;
                        introduction2: string;
                        integrations_page: string;
                        no_areas: string;
                        other_areas: string;
                        create_area: string;
                        create_floor: string;
                        floor: {
                            edit_floor: string;
                            delete_floor: string;
                            confirm_delete: string;
                            confirm_delete_text: string;
                        };
                        area_reorder_failed: string;
                        area_move_failed: string;
                        floor_reorder_failed: string;
                        reorder: string;
                    };
                    dialog: {
                        reorder_areas_title: string;
                        reorder_floors_areas_title: string;
                        other_areas: string;
                        reorder_failed: string;
                        empty_floor: string;
                        empty_unassigned: string;
                    };
                    editor: {
                        create_area: string;
                        update_area: string;
                        delete: string;
                        name: string;
                        icon: string;
                        floor: string;
                        add_labels: string;
                        name_required: string;
                        area_id: string;
                        unknown_error: string;
                        linked_entities_caption: string;
                        no_linked_entities: string;
                        aliases_section: string;
                        no_aliases: string;
                        configured_aliases: string;
                        aliases_description: string;
                        temperature_entity: string;
                        temperature_entity_description: string;
                        humidity_entity: string;
                        humidity_entity_description: string;
                        related_entities_section: string;
                    };
                    delete: {
                        confirmation_title: string;
                        confirmation_text: string;
                    };
                };
                backup: {
                    caption: string;
                    description: string;
                    description_no_backup: string;
                    create_backup: string;
                    creating_backup: string;
                    download_backup: string;
                    remove_backup: string;
                    name: string;
                    path: string;
                    size: string;
                    created: string;
                    no_backups: string;
                    backup_type: string;
                    type: {
                        manual: string;
                        automatic: string;
                        app_update: string;
                    };
                    locations: string;
                    create: {
                        title: string;
                        description: string;
                        confirm: string;
                    };
                    remove: {
                        title: string;
                        description: string;
                        confirm: string;
                    };
                    picker: {
                        search: string;
                    };
                    dialogs: {
                        local_backup_location: {
                            title: string;
                            description: string;
                            note: string;
                            options: {
                                default_backup_mount: {
                                    name: string;
                                };
                            };
                        };
                        delete_selected: {
                            title: string;
                            text: string;
                            failed: string;
                        };
                        delete: {
                            title: string;
                            text: string;
                            failed: string;
                        };
                        upload: {
                            title: string;
                            action: string;
                            input_label: string;
                            supports_tar: string;
                            unsupported: {
                                title: string;
                                text: string;
                            };
                        };
                        generate: {
                            sync: {
                                title: string;
                                name: string;
                                locations: string;
                                locations_description: string;
                                locations_options: {
                                    all: string;
                                    custom: string;
                                };
                                ha_cloud_alert: {
                                    title: string;
                                    description: string;
                                };
                            };
                            data: {
                                title: string;
                            };
                            actions: {
                                create: string;
                            };
                        };
                        new: {
                            title: string;
                            options: string;
                            automatic: {
                                title: string;
                                description: string;
                            };
                            manual: {
                                title: string;
                                description: string;
                            };
                        };
                        restore: {
                            title: string;
                            restore_failed: string;
                            confirm: {
                                description: string;
                            };
                            encryption: {
                                different_key: string;
                                incorrect_key: string;
                                description: string;
                                warning: string;
                                input_label: string;
                            };
                            progress: {
                                restarting: string;
                                restoring: string;
                            };
                            actions: {
                                restore: string;
                            };
                        };
                        onboarding: {
                            welcome: {
                                title: string;
                                description: string;
                            };
                            key: {
                                title: string;
                                description: string;
                            };
                            setup: {
                                title: string;
                                recommended_heading: string;
                                recommended_description: string;
                                custom_heading: string;
                                custom_description: string;
                            };
                            schedule: {
                                title: string;
                                description: string;
                            };
                            data: {
                                title: string;
                                description: string;
                            };
                            locations: {
                                title: string;
                                description: string;
                            };
                            save_and_create: string;
                        };
                        change_encryption_key: {
                            current: {
                                title: string;
                                description: string;
                            };
                            new: {
                                title: string;
                                description: string;
                            };
                            done: {
                                title: string;
                            };
                            actions: {
                                change: string;
                                done: string;
                            };
                        };
                        set_encryption_key: {
                            key: {
                                title: string;
                                description: string;
                            };
                            done: {
                                title: string;
                            };
                            actions: {
                                set: string;
                                done: string;
                            };
                        };
                        show_encryption_key: {
                            title: string;
                            description: string;
                        };
                        download: {
                            decryption_unsupported_title: string;
                            decryption_unsupported: string;
                            error_check_title: string;
                            error_check_description: string;
                            title: string;
                            description: string;
                            download_backup_encrypted: string;
                            download_it_encrypted: string;
                            encryption_key: string;
                            incorrect_encryption_key: string;
                            decryption_not_supported: string;
                            download: string;
                        };
                    };
                    agents: {
                        cloud_agent_description: string;
                        cloud_agent_no_subcription: string;
                        network_mount_agent_description: string;
                        unavailable_agents: string;
                        no_agents: string;
                        encryption_turned_off: string;
                        local_agent: string;
                        retention_all: string;
                        retention_backups: string;
                        retention_days: string;
                    };
                    data: {
                        ha_settings: string;
                        ha_settings_description: string;
                        ha_settings_included_description: string;
                        history: string;
                        history_description: string;
                        media: string;
                        media_description: string;
                        share_folder: string;
                        share_folder_description: string;
                        local_apps: string;
                        local_apps_description: string;
                        apps: string;
                        apps_description: string;
                        apps_all: string;
                        apps_none: string;
                        apps_custom: string;
                        estimated_size: string;
                        estimated_size_disclaimer: string;
                        estimated_size_disclaimer_apps_custom: string;
                        estimated_size_loading: string;
                    };
                    data_picker: {
                        settings: string;
                        settings_and_history: string;
                        media: string;
                        share_folder: string;
                        local_apps: string;
                        apps: string;
                        ssl: string;
                    };
                    schedule: {
                        schedule: string;
                        backup_every: string;
                        custom_schedule: string;
                        time: string;
                        custom_time: string;
                        custom_time_label: string;
                        custom_time_description: string;
                        schedule_description: string;
                        schedule_time_description: string;
                        tip: string;
                        schedule_options: {
                            never: string;
                            daily: string;
                            custom_days: string;
                        };
                        time_options: {
                            default: string;
                            custom: string;
                        };
                        retention: string;
                        custom_retention: string;
                        custom_retention_label: string;
                        retention_description: string;
                        retention_presets: {
                            global: string;
                            copies_3: string;
                            forever: string;
                            custom: string;
                        };
                        retention_units: {
                            copies: string;
                            days: string;
                        };
                        update_preference: {
                            label: string;
                            supporting_text: string;
                            skip_backups: string;
                            backup_before_update: string;
                        };
                    };
                    encryption_key: {
                        download_emergency_kit: string;
                        download_emergency_kit_description: string;
                        download_emergency_kit_action: string;
                        download_old_emergency_kit: string;
                        download_old_emergency_kit_description: string;
                        download_old_emergency_kit_action: string;
                        show_encryption_key: string;
                        show_encryption_key_description: string;
                        show_encryption_key_action: string;
                        change_encryption_key: string;
                        change_encryption_key_description: string;
                        change_encryption_key_action: string;
                        set_encryption_key: string;
                        set_encryption_key_description: string;
                        set_encryption_key_action: string;
                    };
                    emergency_kit_file: {
                        title: string;
                        description: string;
                        date: string;
                        instance: string;
                        url: string;
                        encryption_key: string;
                        more_info: string;
                    };
                    overview: {
                        header: string;
                        menu: {
                            upload_backup: string;
                        };
                        agent_error: string;
                        create_backup_failed: string;
                        new_backup: string;
                        onboarding: {
                            title: string;
                            description: string;
                            setup: string;
                        };
                        progress: {
                            heading: {
                                create_backup: string;
                                restore_backup: string;
                                receive_backup: string;
                            };
                            description: {
                                create_backup: {
                                    addon_repositories: string;
                                    addons: string;
                                    await_addon_restarts: string;
                                    app_repositories: string;
                                    apps: string;
                                    await_app_restarts: string;
                                    docker_config: string;
                                    finishing_file: string;
                                    folders: string;
                                    home_assistant: string;
                                    upload_to_agents: string;
                                    cleaning_up: string;
                                };
                                restore_backup: {
                                    addon_repositories: string;
                                    addons: string;
                                    await_addon_restarts: string;
                                    app_repositories: string;
                                    apps: string;
                                    await_app_restarts: string;
                                    await_home_assistant_restart: string;
                                    check_home_assistant: string;
                                    docker_config: string;
                                    download_from_agent: string;
                                    folders: string;
                                    home_assistant: string;
                                    remove_delta_addons: string;
                                    remove_delta_apps: string;
                                };
                                receive_backup: {
                                    receive_file: string;
                                    upload_to_agents: string;
                                };
                            };
                            segments: {
                                home_assistant: string;
                                apps: string;
                                media: string;
                                upload: string;
                                cleaning_up: string;
                            };
                            agent_status: {
                                uploading: string;
                                uploaded: string;
                            };
                        };
                        summary: {
                            no_automatic_backup: string;
                            next_automatic_backup: string;
                            today: string;
                            tomorrow: string;
                            loading: string;
                            last_backup_failed_heading: string;
                            last_backup_failed_description: string;
                            last_backup_failed_locations_description: string;
                            last_backup_failed_apps_description: string;
                            last_backup_failed_folders_description: string;
                            last_backup_failed_apps_folders_description: string;
                            last_backup_failed_locations_apps_description: string;
                            last_backup_failed_locations_folders_description: string;
                            last_backup_failed_locations_apps_folders_description: string;
                            last_successful_backup_description: string;
                            no_backup_heading: string;
                            no_backup_description: string;
                            backup_too_old_heading: string;
                            backup_success_heading: string;
                            additional_backup_description: string;
                        };
                        backups: {
                            title: string;
                            automatic: string;
                            manual: string;
                            app_update: string;
                            total_size: string;
                            show_all: string;
                        };
                        settings: {
                            title: string;
                            configure: string;
                            schedule: string;
                            schedule_copies_all: string;
                            schedule_copies_backups: string;
                            schedule_copies_days: string;
                            schedule_daily: string;
                            schedule_days: string;
                            schedule_weekdays: string;
                            schedule_optimized_weekdays: string;
                            schedule_weekend: string;
                            schedule_optimized_weekend: string;
                            schedule_optimized_daily: string;
                            schedule_optimized_days: string;
                            schedule_never: string;
                            data: string;
                            data_settings_history: string;
                            data_settings_only: string;
                            apps: string;
                            apps_all: string;
                            apps_many: string;
                            apps_none: string;
                            locations: string;
                            locations_one: string;
                            locations_many: string;
                            locations_local_only: string;
                            locations_none: string;
                            system_optimal_time: string;
                            weekdays: {
                                mon: string;
                                tue: string;
                                wed: string;
                                thu: string;
                                fri: string;
                                sat: string;
                                sun: string;
                            };
                            short_weekdays: {
                                mon: string;
                                tue: string;
                                wed: string;
                                thu: string;
                                fri: string;
                                sat: string;
                                sun: string;
                            };
                        };
                        app_update_backup: {
                            title: string;
                            description: string;
                        };
                    };
                    backups: {
                        header: string;
                        menu: {
                            upload_backup: string;
                        };
                        delete_selected: string;
                        new_backup: string;
                    };
                    settings: {
                        header: string;
                        menu: {
                            change_default_location: string;
                        };
                        schedule: {
                            title: string;
                            description: string;
                            error_load: string;
                            error_save: string;
                        };
                        data: {
                            title: string;
                        };
                        locations: {
                            title: string;
                            description: string;
                            no_location: string;
                            no_location_description: string;
                            more_locations: string;
                            manage_network_storage: string;
                            ha_cloud_backup: string;
                            ha_cloud_description: string;
                        };
                        encryption_key: {
                            title: string;
                            description: string;
                        };
                        app_update_backup: {
                            title: string;
                            description: string;
                            local_only: string;
                            retention_description: string;
                            error_load: string;
                            error_save: string;
                        };
                    };
                    app_update_backups: {
                        header: string;
                    };
                    details: {
                        header: string;
                        not_found: string;
                        not_found_description: string;
                        error: string;
                        summary: {
                            title: string;
                            size: string;
                            created: string;
                            error: {
                                title: string;
                                failed_locations: string;
                                failed_apps: string;
                                failed_folders: string;
                            };
                        };
                        restore: {
                            title: string;
                            action: string;
                        };
                        locations: {
                            title: string;
                            backup_failed: string;
                            encryption_turned_off: string;
                            download: string;
                            unencrypted: string;
                            encrypted: string;
                        };
                    };
                    location: {
                        header: string;
                        save_error: string;
                        retention_for_this_system: string;
                        retention_for_location: string;
                        not_found: string;
                        not_found_description: string;
                        error: string;
                        configuration: {
                            title: string;
                            cloud_description: string;
                        };
                        encryption: {
                            title: string;
                            description: string;
                            location_encrypted: string;
                            location_unencrypted: string;
                            location_encrypted_description: string;
                            location_encrypted_cloud_description: string;
                            location_encrypted_cloud_learn_more: string;
                            location_unencrypted_description: string;
                            encryption_turn_on: string;
                            encryption_turn_off: string;
                            encryption_turn_off_confirm_title: string;
                            encryption_turn_off_confirm_text: string;
                            encryption_turn_off_confirm_action: string;
                            warning_encryption_turn_off: string;
                            warning_encryption_turn_off_description: string;
                        };
                    };
                };
                tag: {
                    caption: string;
                    description: string;
                    learn_more: string;
                    no_tags: string;
                    add_tag: string;
                    write: string;
                    never_scanned: string;
                    create_automation: string;
                    confirm_delete_title: string;
                    confirm_delete: string;
                    automation_title: string;
                    qr_code_image: string;
                    headers: {
                        icon: string;
                        name: string;
                        last_scanned: string;
                        write: string;
                        tag_id: string;
                    };
                    detail: {
                        new_tag: string;
                        tag_details: string;
                        name: string;
                        description: string;
                        tag_id: string;
                        tag_id_placeholder: string;
                        use_custom_id: string;
                        custom_id_warning: string;
                        delete: string;
                        update: string;
                        create: string;
                        create_and_write: string;
                        required_error_msg: string;
                        usage: string;
                        companion_apps: string;
                    };
                };
                "developer-tools": {
                    tabs: {
                        assist: {
                            title: string;
                            description: string;
                            parse_sentences: string;
                            sentences: string;
                            download_results: string;
                            no_match: string;
                            language: string;
                        };
                        debug: {
                            title: string;
                            debug_connection: {
                                title: string;
                                description: string;
                            };
                            disable_view_transition: {
                                title: string;
                                description: string;
                            };
                            entity_diagnostic: {
                                title: string;
                                description: string;
                                copy_to_clipboard: string;
                            };
                            viewport_environment: {
                                title: string;
                                description: string;
                            };
                        };
                        events: {
                            title: string;
                            description: string;
                            documentation: string;
                            type: string;
                            data: string;
                            fire_event: string;
                            event_fired: string;
                            active_listeners: string;
                            count_listeners: string;
                            listen_to_events: string;
                            filter_events: string;
                            filter_helper: string;
                            filter_ignored: string;
                            listening_to: string;
                            subscribe_to: string;
                            start_listening: string;
                            stop_listening: string;
                            clear_events: string;
                            alert_event_type: string;
                            notification_event_fired: string;
                            subscribe_failed: string;
                            unknown_error: string;
                            oldest_event: string;
                            older_event: string;
                            newer_event: string;
                            newest_event: string;
                            waiting_for_events: string;
                            subscribe_prompt: string;
                            buffer_disclaimer: string;
                        };
                        actions: {
                            title: string;
                            description: string;
                            call_service: string;
                            response: string;
                            column_parameter: string;
                            column_description: string;
                            column_example: string;
                            fill_example_data: string;
                            yaml_mode: string;
                            ui_mode: string;
                            yaml_parameters: string;
                            all_parameters: string;
                            accepts_target: string;
                            no_template_ui_support: string;
                            copy_clipboard_template: string;
                            open_media: string;
                            errors: {
                                ui: {
                                    no_action: string;
                                    invalid_action: string;
                                    no_target: string;
                                    missing_required_field: string;
                                };
                                yaml: {
                                    invalid_yaml: string;
                                    no_action: string;
                                    invalid_action: string;
                                    no_target: string;
                                    missing_required_field: string;
                                };
                            };
                        };
                        states: {
                            title: string;
                            description1: string;
                            description2: string;
                            entity: string;
                            state: string;
                            attributes: string;
                            state_attributes: string;
                            set_state: string;
                            current_entities: string;
                            filter_entities: string;
                            filter_states: string;
                            filter_attributes: string;
                            no_entities: string;
                            more_info: string;
                            alert_entity_field: string;
                            last_updated: string;
                            last_changed: string;
                            copy_id: string;
                        };
                        templates: {
                            title: string;
                            description: string;
                            about: string;
                            editor: string;
                            result: string;
                            reset: string;
                            confirm_reset: string;
                            confirm_clear: string;
                            result_type: string;
                            jinja_documentation: string;
                            template_extensions: string;
                            unknown_error_template: string;
                            time: string;
                            all_listeners: string;
                            no_listeners: string;
                            listeners: string;
                            entity: string;
                            domain: string;
                            keyboard_tip: string;
                        };
                        statistics: {
                            title: string;
                            entity: string;
                            issue: string;
                            no_issue: string;
                            issues: {
                                units_changed: string;
                                mean_type_changed: string;
                                state_class_removed: string;
                                entity_not_recorded: string;
                                entity_no_longer_recorded: string;
                                no_state: string;
                            };
                            delete_selected: string;
                            multi_delete: {
                                title: string;
                                info_text: string;
                            };
                            mean_type: {
                                "0": string;
                                "1": string;
                                "2": string;
                            };
                            fix_issue: {
                                fix: string;
                                clearing_failed: string;
                                clearing_timeout_title: string;
                                clearing_timeout_text: string;
                                fix_all: string;
                                info: string;
                                no_support: {
                                    title: string;
                                    info_text_1: string;
                                };
                                no_state: {
                                    title: string;
                                    info_text_1: string;
                                    info_text_2: string;
                                };
                                entity_not_recorded: {
                                    title: string;
                                    info_text_1: string;
                                    info_text_2: string;
                                    info_text_3_link: string;
                                };
                                entity_no_longer_recorded: {
                                    title: string;
                                    info_text_1: string;
                                    info_text_2: string;
                                    info_text_3_link: string;
                                    info_text_4: string;
                                };
                                state_class_removed: {
                                    title: string;
                                    info_text_1: string;
                                    info_text_2: string;
                                    info_text_3: string;
                                    info_text_4: string;
                                    info_text_4_link: string;
                                    info_text_5: string;
                                    info_text_6: string;
                                };
                                units_changed: {
                                    title: string;
                                    update: string;
                                    clear: string;
                                    how_to_fix: string;
                                    info_text_1: string;
                                    info_text_2: string;
                                    info_text_3: string;
                                };
                                mean_type_changed: {
                                    title: string;
                                    info_text_1: string;
                                    info_text_2: string;
                                    info_text_3: string;
                                };
                                adjust_sum: {
                                    title: string;
                                    no_statistics_found: string;
                                    info_text_1: string;
                                    pick_a_time: string;
                                    statistic: string;
                                    start: string;
                                    end: string;
                                    new_value: string;
                                    adjust: string;
                                    outliers: string;
                                    sum_adjusted: string;
                                    error_sum_adjusted: string;
                                };
                            };
                            adjust_sum: string;
                            data_table: {
                                select_all_issues: string;
                                name: string;
                                statistic_id: string;
                                statistics_unit: string;
                                source: string;
                                issue: string;
                                no_statistics: string;
                            };
                        };
                        yaml: {
                            title: string;
                            section: {
                                validation: {
                                    heading: string;
                                    introduction: string;
                                    check_config: string;
                                    valid: string;
                                    invalid: string;
                                    warnings: string;
                                    errors: string;
                                };
                                reloading: {
                                    all: string;
                                    heading: string;
                                    introduction: string;
                                    reload: string;
                                    core: string;
                                    group: string;
                                    automation: string;
                                    script: string;
                                    scene: string;
                                    person: string;
                                    zone: string;
                                    input_boolean: string;
                                    input_button: string;
                                    input_text: string;
                                    input_number: string;
                                    input_datetime: string;
                                    input_select: string;
                                    template: string;
                                    universal: string;
                                    rest: string;
                                    command_line: string;
                                    filter: string;
                                    statistics: string;
                                    generic: string;
                                    generic_thermostat: string;
                                    homekit: string;
                                    min_max: string;
                                    history_stats: string;
                                    trend: string;
                                    ping: string;
                                    filesize: string;
                                    telegram: string;
                                    smtp: string;
                                    mqtt: string;
                                    rpi_gpio: string;
                                    timer: string;
                                    themes: string;
                                };
                                server_management: {
                                    heading: string;
                                    restart: string;
                                    stop: string;
                                    confirm_stop: string;
                                    restart_error: string;
                                };
                            };
                        };
                    };
                };
                energy: {
                    caption: string;
                    description: string;
                    new_device_info: string;
                    tabs: {
                        electricity: string;
                        gas: string;
                        water: string;
                    };
                    delete_source: string;
                    delete_integration: string;
                    grid: {
                        title: string;
                        sub: string;
                        learn_more: string;
                        grid_connections: string;
                        add_connection: string;
                        edit_connection: string;
                        delete_connection: string;
                        grid_carbon_footprint: string;
                        remove_co2_signal: string;
                        add_co2_signal: string;
                        dialog: {
                            header: string;
                            energy: string;
                            energy_from_grid: string;
                            energy_from_helper: string;
                            energy_to_grid: string;
                            energy_to_helper: string;
                            display_name: string;
                            import_cost: string;
                            import_cost_para: string;
                            no_cost_tracking: string;
                            cost_stat: string;
                            cost_stat_label: string;
                            cost_entity: string;
                            cost_entity_label: string;
                            cost_number: string;
                            cost_number_label: string;
                            export_compensation: string;
                            export_compensation_para: string;
                            no_compensation_tracking: string;
                            compensation_stat: string;
                            compensation_stat_label: string;
                            compensation_entity: string;
                            compensation_entity_label: string;
                            compensation_number: string;
                            compensation_number_label: string;
                            power: string;
                            sensor_type: string;
                            sensor_type_para: string;
                            type_none: string;
                            type_standard: string;
                            type_inverted: string;
                            type_inverted_description: string;
                            type_two_sensors: string;
                            power_stat: string;
                            power_helper: string;
                            power_from: string;
                            power_to: string;
                        };
                        flow_dialog: {
                            from: {
                                no_cost: string;
                                cost_stat: string;
                                cost_stat_input: string;
                                cost_entity: string;
                                cost_entity_input: string;
                                cost_number: string;
                                cost_number_input: string;
                            };
                        };
                    };
                    solar: {
                        title: string;
                        sub: string;
                        learn_more: string;
                        solar_production: string;
                        edit_solar_production: string;
                        delete_solar_production: string;
                        add_solar_production: string;
                        stat_production: string;
                        stat_return_to_grid: string;
                        stat_predicted_production: string;
                        dialog: {
                            header: string;
                            entity_para: string;
                            display_name: string;
                            solar_production_energy: string;
                            solar_production_power: string;
                            solar_production_forecast: string;
                            solar_production_forecast_description: string;
                            dont_forecast_production: string;
                            forecast_production: string;
                            add_forecast: string;
                        };
                    };
                    battery: {
                        title: string;
                        sub: string;
                        learn_more: string;
                        battery_systems: string;
                        edit_battery_system: string;
                        delete_battery_system: string;
                        add_battery_system: string;
                        dialog: {
                            header: string;
                            energy_helper_into: string;
                            energy_helper_out: string;
                            energy_into_battery: string;
                            energy_out_of_battery: string;
                            display_name: string;
                            state_of_charge: string;
                            state_of_charge_helper: string;
                            power: string;
                            power_helper: string;
                            sensor_type: string;
                            sensor_type_para: string;
                            type_none: string;
                            type_standard: string;
                            type_inverted: string;
                            type_inverted_description: string;
                            type_two_sensors: string;
                            power_from: string;
                            power_to: string;
                        };
                    };
                    gas: {
                        title: string;
                        sub: string;
                        learn_more: string;
                        gas_consumption: string;
                        edit_gas_source: string;
                        delete_gas_source: string;
                        add_gas_source: string;
                        dialog: {
                            header: string;
                            paragraph: string;
                            entity_para: string;
                            note_para: string;
                            display_name: string;
                            cost_para: string;
                            no_cost: string;
                            cost_stat: string;
                            cost_stat_input: string;
                            cost_entity: string;
                            cost_entity_input: string;
                            cost_entity_helper: string;
                            cost_entity_helper_energy: string;
                            cost_entity_helper_volume: string;
                            cost_number: string;
                            cost_number_input: string;
                            gas_usage: string;
                            gas_flow_rate: string;
                            flow_rate_para: string;
                        };
                    };
                    water: {
                        title: string;
                        sub: string;
                        learn_more: string;
                        water_consumption: string;
                        edit_water_source: string;
                        delete_water_source: string;
                        add_water_source: string;
                        dialog: {
                            header: string;
                            paragraph: string;
                            entity_para: string;
                            cost_para: string;
                            display_name: string;
                            no_cost: string;
                            cost_stat: string;
                            cost_stat_input: string;
                            cost_entity: string;
                            cost_entity_input: string;
                            cost_entity_helper: string;
                            cost_number: string;
                            cost_number_input: string;
                            water_usage: string;
                            water_flow_rate: string;
                            flow_rate_para: string;
                        };
                    };
                    device_consumption: {
                        title: string;
                        sub: string;
                        learn_more: string;
                        add_stat: string;
                        selected_stat: string;
                        devices: string;
                        add_device: string;
                        dialog: {
                            header: string;
                            display_name: string;
                            device_consumption_energy: string;
                            device_consumption_power: string;
                            selected_stat_intro: string;
                            included_in_device: string;
                            included_in_device_helper: string;
                            no_upstream_devices: string;
                        };
                    };
                    device_consumption_water: {
                        title: string;
                        sub: string;
                        learn_more: string;
                        devices: string;
                        add_device: string;
                        dialog: {
                            header: string;
                            display_name: string;
                            device_consumption_water: string;
                            device_consumption_water_flow_rate: string;
                            selected_stat_intro: string;
                            included_in_device: string;
                            included_in_device_helper: string;
                            no_upstream_devices: string;
                        };
                    };
                };
                helpers: {
                    caption: string;
                    description: string;
                    types: {
                        input_text: string;
                        input_number: string;
                        input_select: string;
                        input_boolean: string;
                        input_button: string;
                        input_datetime: string;
                        counter: string;
                        timer: string;
                        schedule: string;
                    };
                    picker: {
                        headers: {
                            icon: string;
                            name: string;
                            type: string;
                        };
                        create_helper: string;
                        no_helpers: string;
                        search: string;
                        error_information: string;
                        delete_confirm_title: string;
                        delete_confirm_text: string;
                        delete_failed: string;
                    };
                    dialog: {
                        create: string;
                        create_helper: string;
                        create_platform: string;
                    };
                };
                core: {
                    caption: string;
                    description: string;
                    section: {
                        core: {
                            header: string;
                            introduction: string;
                            core_config: {
                                edit_requires_storage: string;
                                location_name: string;
                                latitude: string;
                                longitude: string;
                                elevation: string;
                                elevation_meters: string;
                                time_zone: string;
                                language: string;
                                country: string;
                                unit_system: string;
                                unit_system_us_customary: string;
                                unit_system_metric: string;
                                us_customary_example: string;
                                metric_example: string;
                                find_currency_value: string;
                                save_button: string;
                                currency: string;
                                edit_location: string;
                                edit_location_description: string;
                                update_units_label: string;
                                update_units_text_1: string;
                                update_units_text_2: string;
                                update_units_text_3: string;
                                update_units_confirm_title: string;
                                update_units_confirm_text: string;
                                update_units_confirm_update: string;
                            };
                            home_name_card: {
                                header: string;
                            };
                            location_card: {
                                header: string;
                            };
                            regional_settings_card: {
                                header: string;
                            };
                        };
                    };
                };
                url: {
                    caption: string;
                    description: string;
                    internal_url_label: string;
                    external_url_label: string;
                    external_use_ha_cloud: string;
                    manage_ha_cloud: string;
                    external_get_ha_cloud: string;
                    ha_cloud_remote_not_enabled: string;
                    enable_remote: string;
                    internal_url_automatic: string;
                    internal_url_https_error_title: string;
                    internal_url_https_error_description: string;
                    internal_url_automatic_description: string;
                    internal_url_placeholder: string;
                    invalid_url: string;
                };
                hardware: {
                    caption: string;
                    overview: string;
                    description: string;
                    system_hardware: {
                        failed_to_get: string;
                        title: string;
                        search: string;
                        name: string;
                        subsystem: string;
                        device_path: string;
                        id: string;
                        attributes: string;
                    };
                    reboot_moved_title: string;
                    reboot_moved_description: string;
                    reboot_moved_link: string;
                    processor: string;
                    memory: string;
                    generic_hardware: string;
                    documentation: string;
                    configure: string;
                    documentation_description: string;
                    restart_homeassistant: string;
                    loading_system_data: string;
                };
                info: {
                    caption: string;
                    installation_method: string;
                    external_app_version: string;
                    copy_menu: string;
                    copy_raw: string;
                    copy_github: string;
                    description: string;
                    home_assistant_logo: string;
                    developed_by: string;
                    license: string;
                    source: string;
                    server: string;
                    frontend: string;
                    built_using: string;
                    icons_by: string;
                    frontend_version_label: string;
                    proud_part_of: string;
                    custom_uis: string;
                    system_health_error: string;
                    documentation: string;
                    issues: string;
                    setup_time: string;
                    system_health: {
                        manage: string;
                        more_info: string;
                    };
                    items: {
                        change_log: string;
                        thanks: string;
                        merch: string;
                        feature: string;
                        bug: string;
                        help: string;
                        license: string;
                    };
                    shortcuts: string;
                };
                logs: {
                    caption: string;
                    description: string;
                    details: string;
                    search: string;
                    failed_get_logs: string;
                    no_issues_search: string;
                    load_logs: string;
                    nr_of_lines: string;
                    loading_log: string;
                    no_errors: string;
                    no_issues: string;
                    clear: string;
                    refresh: string;
                    copy: string;
                    log_provider: string;
                    multiple_messages: string;
                    level: {
                        critical: string;
                        error: string;
                        warning: string;
                        info: string;
                        debug: string;
                    };
                    custom_integration: string;
                    error_from_custom_integration: string;
                    show_full_logs: string;
                    show_condensed_logs: string;
                    select_number_of_lines: string;
                    lines: string;
                    download_logs: string;
                    scroll_down_button: string;
                    provider_not_found: string;
                    provider_not_available: string;
                    haos_boots_title: string;
                    show_haos_boots: string;
                    hide_haos_boots: string;
                    full_width: string;
                    wrap_lines: string;
                    current: string;
                    previous: string;
                    startups_ago: string;
                    detail: {
                        logger: string;
                        source: string;
                        integration: string;
                        documentation: string;
                        issues: string;
                        first_occurred: string;
                        number_of_occurrences: string;
                        last_logged: string;
                    };
                };
                lovelace: {
                    caption: string;
                    description: string;
                    dashboards: {
                        default_dashboard: string;
                        caption: string;
                        conf_mode: {
                            yaml: string;
                            storage: string;
                        };
                        dialog_new: {
                            header: string;
                            create_empty: string;
                            create_empty_description: string;
                            default: string;
                            default_description: string;
                            strategy: {
                                map: {
                                    title: string;
                                    description: string;
                                };
                                iframe: {
                                    title: string;
                                    description: string;
                                };
                                "overview-legacy": {
                                    title: string;
                                    description: string;
                                };
                            };
                            search_dashboards: string;
                            heading: {
                                default: string;
                                custom: string;
                            };
                        };
                        picker: {
                            headers: {
                                icon: string;
                                title: string;
                                conf_mode: string;
                                default: string;
                                require_admin: string;
                                sidebar: string;
                                filename: string;
                                url: string;
                                type: string;
                            };
                            open: string;
                            edit: string;
                            delete: string;
                            add_dashboard: string;
                            set_as_default: string;
                            type: {
                                user_created: string;
                                built_in: string;
                            };
                        };
                        confirm_delete_title: string;
                        confirm_delete_text: string;
                        cant_edit_yaml: string;
                        cant_edit_lovelace: string;
                        detail: {
                            edit_dashboard: string;
                            new_dashboard: string;
                            show_sidebar: string;
                            icon: string;
                            title: string;
                            title_required: string;
                            url: string;
                            url_error_msg: string;
                            require_admin: string;
                            delete: string;
                            update: string;
                            create: string;
                            set_default: string;
                            remove_default: string;
                            set_default_confirm_title: string;
                            set_default_confirm_text: string;
                            set_default_confirm_note: string;
                            set_default_admin_only_title: string;
                            set_default_admin_only_text: string;
                        };
                        panel_detail: {
                            edit_panel: string;
                            title: string;
                            icon: string;
                            require_admin: string;
                            show_in_sidebar: string;
                            reset_to_default: string;
                            require_admin_helper: string;
                        };
                    };
                    resources: {
                        caption: string;
                        types: {
                            css: string;
                            html: string;
                            js: string;
                            module: string;
                        };
                        unavailable: string;
                        unavailable_safe_mode: string;
                        picker: {
                            headers: {
                                url: string;
                                type: string;
                                delete: string;
                            };
                            no_resources: string;
                            add_resource: string;
                        };
                        confirm_delete_title: string;
                        confirm_delete_text: string;
                        refresh_header: string;
                        refresh_body: string;
                        reload_resources: string;
                        reload_refresh_header: string;
                        reload_refresh_body: string;
                        cant_edit_yaml: string;
                        detail: {
                            new_resource: string;
                            edit_resource: string;
                            warning_header: string;
                            warning_text: string;
                            url: string;
                            url_error_msg: string;
                            type: string;
                            delete: string;
                            update: string;
                            create: string;
                        };
                    };
                };
                voice_assistants: {
                    assistants: {
                        caption: string;
                        pipeline: {
                            link_learn_how_it_works: string;
                            add_assistant: string;
                            exposed_entities: string;
                            assist_devices: string;
                            delete: {
                                confirm_title: string;
                                confirm_text: string;
                                error_preferred: string;
                            };
                            start_conversation: string;
                            devices: {
                                title: string;
                                device: string;
                                pipeline: string;
                                area: string;
                            };
                            detail: {
                                update_assistant_action: string;
                                add_assistant_title: string;
                                add_assistant_action: string;
                                try_tts: string;
                                debug: string;
                                set_as_preferred: string;
                                add_streaming_wake_word: string;
                                form: {
                                    name: string;
                                    conversation_engine: string;
                                    conversation_language: string;
                                    prefer_local_intents: string;
                                    prefer_local_intents_description: string;
                                    language: string;
                                    stt_engine: string;
                                    stt_language: string;
                                    tts_engine: string;
                                    tts_language: string;
                                    tts_voice: string;
                                    wake_word_entity: string;
                                    wake_word_id: string;
                                };
                                steps: {
                                    config: {
                                        title: string;
                                        description: string;
                                    };
                                    conversation: {
                                        title: string;
                                        description: string;
                                    };
                                    stt: {
                                        title: string;
                                        description: string;
                                    };
                                    tts: {
                                        title: string;
                                        description: string;
                                    };
                                    wakeword: {
                                        title: string;
                                        description: string;
                                        note: string;
                                    };
                                };
                                no_cloud_message: string;
                                no_cloud_action: string;
                            };
                            duplicate: {
                                error_pipeline_not_found: string;
                                name: string;
                            };
                        };
                        current_device: {
                            title: string;
                            description: string;
                            open_settings: string;
                        };
                        cloud: {
                            title: string;
                            features: {
                                assistants: {
                                    title: string;
                                    text: string;
                                };
                                speech: {
                                    title: string;
                                    text: string;
                                };
                                remote_access: {
                                    title: string;
                                    text: string;
                                };
                            };
                            and_more: string;
                            try_one_month: string;
                            sign_in: string;
                        };
                    };
                    debug: {
                        header: string;
                        no_runs_found: string;
                        older_run: string;
                        newer_run: string;
                        start_debug_run: string;
                        error: {
                            code: string;
                            fetch_events: string;
                            fetch_runs: string;
                            playing_audio: string;
                            showing_run: string;
                            title: string;
                        };
                        no_events: string;
                        play_audio: string;
                        raw: string;
                        run: string;
                        stages: {
                            engine: string;
                            input: string;
                            language: string;
                            model: string;
                            natural_language_processing: string;
                            output: string;
                            pipeline: string;
                            prefer_local: string;
                            processed_locally: string;
                            response_type: string;
                            speech_to_text: string;
                            text_to_speech: string;
                            timestamp: string;
                            voice: string;
                            wake_word: string;
                        };
                        stop_audio: string;
                        pipeline: {
                            header: string;
                            run_text_pipeline: string;
                            run_audio_pipeline: string;
                            run_audio_with_wake: string;
                            response: string;
                            send: string;
                            continue_listening: string;
                            continue_talking: string;
                            continue_conversation: string;
                            input_text: string;
                            run: string;
                            error_starting: string;
                        };
                    };
                    expose: {
                        caption: string;
                        headers: {
                            icon: string;
                            name: string;
                            aliases: string;
                            remove: string;
                        };
                        aliases: string;
                        expose: string;
                        unexpose: string;
                        add: string;
                        expose_confirm_title: string;
                        expose_confirm_text: string;
                        unexpose_confirm_title: string;
                        unexpose_confirm_text: string;
                        manually_configured: string;
                        not_supported: string;
                        expose_dialog: {
                            header: string;
                            expose_to: string;
                            expose_entities: string;
                        };
                        expose_new_entities: string;
                        expose_new_entities_info: string;
                    };
                    satellite_wizard: {
                        skip: string;
                        not_available: string;
                        update: {
                            title: string;
                            checking: string;
                            secondary: string;
                        };
                        check: {
                            title: string;
                            secondary: string;
                            failed_title: string;
                            failed_secondary: string;
                            help: string;
                            retry: string;
                        };
                        wake_word: {
                            title: string;
                            secondary: string;
                            title_2: string;
                            secondary_2: string;
                            change_wake_word: string;
                            time_out: string;
                            muted: string;
                            muted_description: string;
                        };
                        change_wake_word: {
                            title: string;
                            secondary: string;
                        };
                        area: {
                            title: string;
                            secondary: string;
                            no_selection: string;
                        };
                        pipeline: {
                            title: string;
                            performance: {
                                header: string;
                                low: string;
                                high: string;
                            };
                            commands: {
                                header: string;
                                low: string;
                                ready: string;
                                high: string;
                            };
                            options: {
                                cloud: {
                                    label: string;
                                    description: string;
                                };
                                focused_local: {
                                    label: string;
                                    description: string;
                                };
                                full_local: {
                                    label: string;
                                    description: string;
                                };
                            };
                            unsupported: string;
                            unsupported_language: {
                                header: string;
                                secondary: string;
                                language_picker: string;
                                contribute: string;
                            };
                        };
                        cloud: {
                            title: string;
                            register: {
                                confirm_email: string;
                            };
                        };
                        local: {
                            title: string;
                            secondary: string;
                            failed_title: string;
                            failed_secondary: string;
                            not_supported_title: string;
                            not_supported_secondary: string;
                            full_local_pipeline: string;
                            focused_local_pipeline: string;
                            state: {
                                installing_piper: string;
                                starting_piper: string;
                                setup_piper: string;
                                "installing_faster-whisper": string;
                                "starting_faster-whisper": string;
                                "setup_faster-whisper": string;
                                "installing_speech-to-phrase": string;
                                "starting_speech-to-phrase": string;
                                "setup_speech-to-phrase": string;
                                creating_pipeline: string;
                            };
                            errors: {
                                failed_create_entry: string;
                                could_not_find_entities: string;
                            };
                        };
                        success: {
                            title: string;
                            secondary: string;
                            test_wakeword: string;
                            edit_pipeline: string;
                            try_tts: string;
                            done: string;
                            failed_rename: string;
                        };
                    };
                };
                automation: {
                    caption: string;
                    description: string;
                    picker: {
                        header: string;
                        introduction: string;
                        learn_more: string;
                        pick_automation: string;
                        no_automations: string;
                        add_automation: string;
                        only_editable: string;
                        dev_only_editable: string;
                        edit_automation: string;
                        dev_automation: string;
                        show_info_automation: string;
                        show_settings: string;
                        delete: string;
                        delete_confirm_title: string;
                        delete_confirm_text: string;
                        duplicate: string;
                        disabled: string;
                        state: string;
                        filtered_by_blueprint: string;
                        traces_not_available: string;
                        edit_category: string;
                        assign_category: string;
                        no_category_support: string;
                        no_category_entity_reg: string;
                        search: string;
                        headers: {
                            toggle: string;
                            name: string;
                            trigger: string;
                            actions: string;
                            state: string;
                            icon: string;
                        };
                        bulk_action: string;
                        bulk_actions: {
                            move_category: string;
                            no_category: string;
                            add_label: string;
                            enable: string;
                            disable: string;
                        };
                        empty_header: string;
                        empty_text_1: string;
                        empty_text_2: string;
                        migrate_automation: string;
                        migrate_automation_description: string;
                    };
                    dialog_new: {
                        header: string;
                        create_empty: string;
                        create_empty_description: string;
                        no_blueprints_match_search: string;
                        create_blueprint: string;
                        create_blueprint_description: string;
                        blueprint_source: {
                            author: string;
                            local: string;
                            community: string;
                            homeassistant: string;
                        };
                        discover_blueprint_tip: string;
                    };
                    editor: {
                        enable: string;
                        disable: string;
                        disabled: string;
                        read_only: string;
                        unavailable: string;
                        migrate: string;
                        duplicate: string;
                        take_control: string;
                        confirm_take_control: string;
                        run: string;
                        rename: string;
                        show_trace: string;
                        show_info: string;
                        default_name: string;
                        missing_name: string;
                        traces_not_available: string;
                        load_error_not_editable: string;
                        load_error_not_deletable: string;
                        load_error_unknown: string;
                        unsaved_confirm_title: string;
                        unsaved_confirm_text: string;
                        alias: string;
                        automation_alias: string;
                        automation_settings: string;
                        move_up: string;
                        move_down: string;
                        collapse_all: string;
                        expand_all: string;
                        description: {
                            label: string;
                            placeholder: string;
                            add: string;
                        };
                        note: {
                            label: string;
                            edit: string;
                            add: string;
                        };
                        leave: {
                            unsaved_new_title: string;
                            unsaved_new_text: string;
                            unsaved_confirm_title: string;
                            unsaved_confirm_text: string;
                        };
                        icon: string;
                        blueprint: {
                            header: string;
                            blueprint_to_use: string;
                            no_blueprints: string;
                            no_inputs: string;
                        };
                        change_mode: string;
                        modes: {
                            label: string;
                            learn_more: string;
                            single: string;
                            single_description: string;
                            restart: string;
                            restart_description: string;
                            queued: string;
                            queued_description: string;
                            parallel: string;
                            parallel_description: string;
                        };
                        max: {
                            queued: string;
                            parallel: string;
                        };
                        edit_yaml: string;
                        edit_ui: string;
                        copy_to_clipboard: string;
                        unknown_entity: string;
                        edit_unknown_device: string;
                        switch_ui_yaml_error: string;
                        type_automation: string;
                        type_script: string;
                        type_scene: string;
                        type_automation_plural: string;
                        type_script_plural: string;
                        type_scene_plural: string;
                        new_automation_setup_failed_title: string;
                        new_automation_setup_failed_text: string;
                        new_automation_setup_keep_waiting: string;
                        new_automation_setup_timedout_success: string;
                        item_pasted: string;
                        ctrl: string;
                        del: string;
                        targets: string;
                        select_target: string;
                        home: string;
                        unassigned: string;
                        blocks: string;
                        tabs: {
                            target: string;
                            type: string;
                        };
                        show_more: string;
                        unassigned_entities: string;
                        unassigned_devices: string;
                        empty_section_search: {
                            block: string;
                            entity: string;
                            device: string;
                            area: string;
                            label: string;
                        };
                        load_target_items_failed: string;
                        other_areas: string;
                        services: string;
                        helpers: string;
                        entity_hidden: string;
                        target_summary: {
                            no_target: string;
                            targets: string;
                            invalid: string;
                            all_entities: string;
                            none_entities: string;
                            template: string;
                            types: {
                                entity: string;
                                device: string;
                                area: string;
                                floor: string;
                                label: string;
                            };
                        };
                        generic: string;
                        triggers: {
                            name: string;
                            header: string;
                            description: string;
                            learn_more: string;
                            triggered: string;
                            add: string;
                            empty_search: {
                                global: string;
                                item: string;
                            };
                            id: string;
                            optional: string;
                            edit_id: string;
                            duplicate: string;
                            re_order: string;
                            rename: string;
                            cut: string;
                            copy: string;
                            paste: string;
                            change_alias: string;
                            alias: string;
                            delete: string;
                            unsupported_platform: string;
                            type_select: string;
                            unknown_trigger: string;
                            triggering_event_detail: string;
                            trigger: string;
                            copied_to_clipboard: string;
                            cut_to_clipboard: string;
                            select: string;
                            no_items_for_target: string;
                            no_items_for_target_note: string;
                            groups: {
                                device: {
                                    label: string;
                                };
                                entity: {
                                    label: string;
                                };
                                time_location: {
                                    label: string;
                                };
                                generic: {
                                    label: string;
                                };
                                custom_integrations: {
                                    label: string;
                                };
                            };
                            type: {
                                calendar: {
                                    label: string;
                                    event: string;
                                    start: string;
                                    end: string;
                                    offset: string;
                                    before: string;
                                    after: string;
                                    description: {
                                        picker: string;
                                        full: string;
                                    };
                                };
                                device: {
                                    label: string;
                                    trigger: string;
                                    description: {
                                        picker: string;
                                    };
                                };
                                event: {
                                    label: string;
                                    event_type: string;
                                    event_data: string;
                                    context_users: string;
                                    context_user_picked: string;
                                    context_user_pick: string;
                                    description: {
                                        picker: string;
                                        full: string;
                                    };
                                };
                                geo_location: {
                                    label: string;
                                    source: string;
                                    zone: string;
                                    event: string;
                                    enter: string;
                                    leave: string;
                                    description: {
                                        picker: string;
                                        full: string;
                                    };
                                };
                                state: {
                                    label: string;
                                    attribute: string;
                                    from: string;
                                    for: string;
                                    to: string;
                                    any_state_ignore_attributes: string;
                                    description: {
                                        picker: string;
                                        full: string;
                                    };
                                };
                                homeassistant: {
                                    label: string;
                                    event: string;
                                    start: string;
                                    shutdown: string;
                                    description: {
                                        picker: string;
                                        started: string;
                                        shutdown: string;
                                    };
                                };
                                mqtt: {
                                    label: string;
                                    topic: string;
                                    payload: string;
                                    description: {
                                        picker: string;
                                        full: string;
                                    };
                                };
                                numeric_state: {
                                    label: string;
                                    above: string;
                                    below: string;
                                    lower_limit: string;
                                    upper_limit: string;
                                    value_template: string;
                                    type_value: string;
                                    type_input: string;
                                    description: {
                                        picker: string;
                                        above: string;
                                        below: string;
                                        "above-below": string;
                                    };
                                };
                                persistent_notification: {
                                    label: string;
                                    notification_id: string;
                                    update_type: string;
                                    update_types: {
                                        added: string;
                                        removed: string;
                                        current: string;
                                        updated: string;
                                    };
                                    description: {
                                        picker: string;
                                        full: string;
                                    };
                                };
                                sun: {
                                    label: string;
                                    event: string;
                                    sunrise: string;
                                    sunset: string;
                                    offset: string;
                                    description: {
                                        picker: string;
                                        sets: string;
                                        rises: string;
                                    };
                                };
                                conversation: {
                                    label: string;
                                    no_punctuation: string;
                                    add_sentence: string;
                                    delete: string;
                                    confirm_delete: string;
                                    description: {
                                        picker: string;
                                        empty: string;
                                        single: string;
                                        multiple: string;
                                    };
                                };
                                tag: {
                                    label: string;
                                    description: {
                                        picker: string;
                                        full: string;
                                        known_tag: string;
                                    };
                                };
                                template: {
                                    label: string;
                                    value_template: string;
                                    for: string;
                                    description: {
                                        picker: string;
                                        full: string;
                                    };
                                };
                                time: {
                                    type_value: string;
                                    type_input: string;
                                    label: string;
                                    at: string;
                                    offset: string;
                                    entity: string;
                                    offset_by: string;
                                    mode: string;
                                    weekday: string;
                                    weekdays: {
                                        mon: string;
                                        tue: string;
                                        wed: string;
                                        thu: string;
                                        fri: string;
                                        sat: string;
                                        sun: string;
                                    };
                                    description: {
                                        picker: string;
                                        full: string;
                                    };
                                };
                                time_pattern: {
                                    label: string;
                                    help: string;
                                    hours: string;
                                    minutes: string;
                                    seconds: string;
                                    description: {
                                        picker: string;
                                        initial: string;
                                        invalid: string;
                                        full: string;
                                        ordinal: string;
                                    };
                                };
                                webhook: {
                                    copy_url: string;
                                    label: string;
                                    local_only: string;
                                    webhook_id: string;
                                    webhook_id_helper: string;
                                    webhook_settings: string;
                                    description: {
                                        picker: string;
                                        full: string;
                                    };
                                };
                                zone: {
                                    label: string;
                                    entity: string;
                                    zone: string;
                                    event: string;
                                    enter: string;
                                    leave: string;
                                    description: {
                                        picker: string;
                                        full: string;
                                    };
                                };
                                list: {
                                    label: string;
                                    description: {
                                        no_trigger: string;
                                        full: string;
                                    };
                                };
                            };
                        };
                        conditions: {
                            name: string;
                            header: string;
                            description: string;
                            learn_more: string;
                            add: string;
                            empty_search: {
                                global: string;
                                item: string;
                            };
                            add_building_block: string;
                            test: string;
                            testing_error: string;
                            testing_pass: string;
                            live_test_state: {
                                pass: string;
                                fail: string;
                                invalid: string;
                                unknown: string;
                            };
                            invalid_condition: string;
                            validation_failed: string;
                            test_failed: string;
                            duplicate: string;
                            re_order: string;
                            rename: string;
                            cut: string;
                            copy: string;
                            paste: string;
                            change_alias: string;
                            alias: string;
                            delete: string;
                            unsupported_condition: string;
                            type_select: string;
                            unknown_condition: string;
                            condition: string;
                            copied_to_clipboard: string;
                            cut_to_clipboard: string;
                            select: string;
                            no_items_for_target: string;
                            no_items_for_target_note: string;
                            groups: {
                                device: {
                                    label: string;
                                };
                                entity: {
                                    label: string;
                                };
                                time_location: {
                                    label: string;
                                };
                                generic: {
                                    label: string;
                                };
                                building_blocks: {
                                    label: string;
                                };
                                custom_integrations: {
                                    label: string;
                                };
                            };
                            type: {
                                and: {
                                    label: string;
                                    description: {
                                        picker: string;
                                        no_conditions: string;
                                        full: string;
                                    };
                                };
                                device: {
                                    label: string;
                                    condition: string;
                                    description: {
                                        picker: string;
                                    };
                                };
                                not: {
                                    label: string;
                                    description: {
                                        picker: string;
                                        no_conditions: string;
                                        one_condition: string;
                                        full: string;
                                    };
                                };
                                numeric_state: {
                                    type_value: string;
                                    type_input: string;
                                    label: string;
                                    above: string;
                                    below: string;
                                    lower_limit: string;
                                    upper_limit: string;
                                    value_template: string;
                                    description: {
                                        picker: string;
                                        above: string;
                                        below: string;
                                        "above-below": string;
                                    };
                                };
                                or: {
                                    label: string;
                                    description: {
                                        picker: string;
                                        no_conditions: string;
                                        full: string;
                                    };
                                };
                                state: {
                                    label: string;
                                    state: string;
                                    description: {
                                        picker: string;
                                        no_entity: string;
                                        full: string;
                                    };
                                };
                                sun: {
                                    label: string;
                                    before: string;
                                    after: string;
                                    between: string;
                                    before_offset: string;
                                    after_offset: string;
                                    sunrise: string;
                                    sunset: string;
                                    description: {
                                        picker: string;
                                        between: string;
                                        before: string;
                                        after: string;
                                    };
                                };
                                template: {
                                    label: string;
                                    value_template: string;
                                    description: {
                                        picker: string;
                                        full: string;
                                    };
                                };
                                time: {
                                    type_value: string;
                                    type_input: string;
                                    label: string;
                                    after: string;
                                    before: string;
                                    weekday: string;
                                    mode_after: string;
                                    mode_before: string;
                                    weekdays: {
                                        mon: string;
                                        tue: string;
                                        wed: string;
                                        thu: string;
                                        fri: string;
                                        sat: string;
                                        sun: string;
                                    };
                                    description: {
                                        picker: string;
                                        full: string;
                                    };
                                };
                                trigger: {
                                    label: string;
                                    no_triggers: string;
                                    id: string;
                                    description: {
                                        picker: string;
                                        full: string;
                                    };
                                };
                                zone: {
                                    label: string;
                                    entity: string;
                                    zone: string;
                                    description: {
                                        picker: string;
                                        full: string;
                                    };
                                };
                            };
                        };
                        actions: {
                            name: string;
                            header: string;
                            description: string;
                            learn_more: string;
                            add: string;
                            empty_search: {
                                global: string;
                                item: string;
                            };
                            add_building_block: string;
                            invalid_action: string;
                            run: string;
                            running_action: string;
                            run_action_error: string;
                            run_action_success: string;
                            duplicate: string;
                            re_order: string;
                            rename: string;
                            cut: string;
                            copy: string;
                            paste: string;
                            change_alias: string;
                            alias: string;
                            enable: string;
                            disable: string;
                            disabled: string;
                            delete: string;
                            unsupported_action: string;
                            type_select: string;
                            continue_on_error: string;
                            continue_on_error_description: string;
                            action: string;
                            copied_to_clipboard: string;
                            cut_to_clipboard: string;
                            select: string;
                            no_items_for_target: string;
                            groups: {
                                device_id: {
                                    label: string;
                                };
                                helpers: {
                                    label: string;
                                };
                                other: {
                                    label: string;
                                };
                                building_blocks: {
                                    label: string;
                                };
                            };
                            type: {
                                service: {
                                    label: string;
                                    response_variable: string;
                                    has_optional_response: string;
                                    has_response: string;
                                    description: {
                                        picker: string;
                                        service_based_on_template: string;
                                        service_based_on_name: string;
                                        service_name: string;
                                        service_based_on_template_no_targets: string;
                                        service_based_on_name_no_targets: string;
                                        service: string;
                                        target_template: string;
                                        target_every_entity: string;
                                        target_unknown_entity: string;
                                        target_unknown_device: string;
                                        target_unknown_area: string;
                                        target_unknown_floor: string;
                                        target_unknown_label: string;
                                    };
                                };
                                play_media: {
                                    label: string;
                                    description: {
                                        picker: string;
                                        full: string;
                                    };
                                };
                                delay: {
                                    label: string;
                                    delay: string;
                                    description: {
                                        picker: string;
                                        full: string;
                                        duration_string: string;
                                        duration_template: string;
                                        duration_unknown: string;
                                    };
                                };
                                wait_template: {
                                    label: string;
                                    wait_template: string;
                                    timeout: string;
                                    continue_timeout: string;
                                    description: {
                                        picker: string;
                                        full: string;
                                    };
                                };
                                wait_for_trigger: {
                                    label: string;
                                    timeout: string;
                                    continue_timeout: string;
                                    description: {
                                        picker: string;
                                        wait_for_a_trigger: string;
                                        wait_for_triggers: string;
                                    };
                                };
                                condition: {
                                    label: string;
                                    description: {
                                        picker: string;
                                    };
                                };
                                event: {
                                    label: string;
                                    event: string;
                                    event_data: string;
                                    description: {
                                        picker: string;
                                        full: string;
                                        template: string;
                                    };
                                };
                                device_id: {
                                    label: string;
                                    action: string;
                                    description: {
                                        picker: string;
                                        no_device: string;
                                        perform_device_action: string;
                                    };
                                };
                                repeat: {
                                    label: string;
                                    type: {
                                        count: {
                                            label: string;
                                        };
                                        while: {
                                            label: string;
                                            conditions: string;
                                        };
                                        until: {
                                            label: string;
                                            conditions: string;
                                        };
                                        for_each: {
                                            label: string;
                                            items: string;
                                        };
                                    };
                                    sequence: string;
                                    description: {
                                        picker: string;
                                        full: string;
                                        count: string;
                                        while_count: string;
                                        until_count: string;
                                        for_each: string;
                                    };
                                };
                                repeat_count: {
                                    label: string;
                                    description: {
                                        picker: string;
                                    };
                                };
                                repeat_while: {
                                    label: string;
                                    description: {
                                        picker: string;
                                    };
                                };
                                repeat_until: {
                                    label: string;
                                    description: {
                                        picker: string;
                                    };
                                };
                                repeat_for_each: {
                                    label: string;
                                    description: {
                                        picker: string;
                                    };
                                };
                                choose: {
                                    label: string;
                                    default: string;
                                    add_default: string;
                                    option: string;
                                    add_option: string;
                                    remove_option: string;
                                    change_alias: string;
                                    alias: string;
                                    delete_confirm_title: string;
                                    option_description_additional: string;
                                    conditions: string;
                                    no_conditions: string;
                                    sequence: string;
                                    option_label: string;
                                    default_option_label: string;
                                    option_description: string;
                                    default_option_description: string;
                                    description: {
                                        picker: string;
                                        full: string;
                                        no_action: string;
                                    };
                                };
                                if: {
                                    label: string;
                                    if: string;
                                    then: string;
                                    else: string;
                                    add_else: string;
                                    description: {
                                        picker: string;
                                        if: string;
                                        if_else: string;
                                    };
                                };
                                stop: {
                                    label: string;
                                    stop: string;
                                    response_variable: string;
                                    error: string;
                                    description: {
                                        picker: string;
                                        full: string;
                                    };
                                };
                                sequence: {
                                    label: string;
                                    description: {
                                        picker: string;
                                        full: string;
                                    };
                                };
                                parallel: {
                                    label: string;
                                    description: {
                                        picker: string;
                                        full: string;
                                    };
                                };
                                variables: {
                                    label: string;
                                    description: {
                                        picker: string;
                                        full: string;
                                    };
                                };
                                check_condition: {
                                    description: {
                                        full: string;
                                    };
                                };
                                set_conversation_response: {
                                    label: string;
                                    description: {
                                        picker: string;
                                        template: string;
                                        full: string;
                                    };
                                };
                                unknown: {
                                    label: string;
                                };
                            };
                        };
                        dialog: {
                            add_description: string;
                            add_icon: string;
                            add_category: string;
                            add_labels: string;
                            add_area: string;
                        };
                        paste_confirm: {
                            title: string;
                            text: string;
                        };
                        paste_toast_message: string;
                        paste_invalid_yaml: string;
                        paste_invalid_config: string;
                    };
                    trace: {
                        refresh: string;
                        select_trace: string;
                        download_trace: string;
                        edit_automation: string;
                        older_trace: string;
                        newer_trace: string;
                        no_traces_found: string;
                        trace_no_longer_available: string;
                        enter_downloaded_trace: string;
                        tabs: {
                            details: string;
                            timeline: string;
                            logbook: string;
                            automation_config: string;
                            step_config: string;
                            changed_variables: string;
                            blueprint_config: string;
                            script_config: string;
                        };
                        path: {
                            choose: string;
                            default_action_executed: string;
                            no_further_execution: string;
                            disabled_step: string;
                            iteration: string;
                            executed: string;
                            error: string;
                            result: string;
                            step_not_executed: string;
                            no_logbook_entries: string;
                            no_variables_changed: string;
                            unable_to_find_config: string;
                        };
                        messages: {
                            no_action_executed: string;
                            default_action_executed: string;
                            action_executed: string;
                            option_executed: string;
                            error: string;
                            execute_in_parallel: string;
                            if: string;
                            choose: string;
                            still_running: string;
                            debugged: string;
                            finished: string;
                            aborted: string;
                            cancelled: string;
                            stopped_failed_conditions: string;
                            stopped_failed_single: string;
                            stopped_failed_max_runs: string;
                            stopped_error: string;
                            stopped_unknown_reason: string;
                            disabled: string;
                            triggered_by: string;
                            path_error: string;
                            not_all_entries_are_related_automation_note: string;
                            not_all_entries_are_related_script_note: string;
                        };
                        picker: {
                            still_running: string;
                            debugged: string;
                            finished: string;
                            aborted: string;
                            cancelled: string;
                            stopped_failed_conditions: string;
                            stopped_failed_single: string;
                            stopped_failed_max_runs: string;
                            stopped_error: string;
                            stopped_unknown_reason: string;
                        };
                    };
                };
                blueprint: {
                    caption: string;
                    description: string;
                    overview: {
                        header: string;
                        introduction: string;
                        learn_more: string;
                        headers: {
                            name: string;
                            type: string;
                            file_name: string;
                            usage_count: string;
                        };
                        types: {
                            automation: string;
                            script: string;
                        };
                        types_plural: {
                            automation: string;
                            script: string;
                        };
                        error: string;
                        blueprint_in_use_title: string;
                        blueprint_in_use_text: string;
                        blueprint_in_use_view: string;
                        confirm_delete_title: string;
                        confirm_delete_text: string;
                        add_blueprint: string;
                        no_blueprints: string;
                        create_automation: string;
                        create_script: string;
                        view_automation: string;
                        view_script: string;
                        delete_blueprint: string;
                        share_blueprint: string;
                        share_blueprint_no_url: string;
                        re_import_blueprint: string;
                        re_import_blueprint_no_url: string;
                        re_import_confirm_title: string;
                        re_import_confirm_text: string;
                        re_import_confirm_action: string;
                        re_import_error_source_not_found: string;
                        re_import_error_save: string;
                        re_import_success: string;
                        discover_more: string;
                    };
                    add: {
                        header: string;
                        import_header: string;
                        import_introduction: string;
                        community_forums: string;
                        url: string;
                        raw_blueprint: string;
                        importing: string;
                        import_btn: string;
                        saving: string;
                        save_btn: string;
                        save_btn_override: string;
                        override_title: string;
                        override_description: string;
                        error_no_url: string;
                        source_warning_title: string;
                        source_warning_description: string;
                        unsupported_blueprint: string;
                        file_name: string;
                    };
                };
                script: {
                    caption: string;
                    description: string;
                    picker: {
                        header: string;
                        introduction: string;
                        learn_more: string;
                        no_scripts: string;
                        add_script: string;
                        run_script: string;
                        run: string;
                        show_trace: string;
                        show_info: string;
                        filtered_by_blueprint: string;
                        headers: {
                            name: string;
                            state: string;
                            icon: string;
                        };
                        edit_category: string;
                        assign_category: string;
                        no_category_support: string;
                        no_category_entity_reg: string;
                        delete: string;
                        duplicate: string;
                        empty_header: string;
                        empty_text: string;
                        search: string;
                        migrate_script: string;
                        migrate_script_description: string;
                    };
                    dialog_new: {
                        header: string;
                        create_empty: string;
                        create_empty_description: string;
                        no_blueprints_match_search: string;
                        create_blueprint: string;
                        create_blueprint_description: string;
                        blueprint_source: {
                            author: string;
                            local: string;
                            community: string;
                            homeassistant: string;
                        };
                        discover_blueprint_tip: string;
                    };
                    editor: {
                        alias: string;
                        icon: string;
                        introduction: string;
                        show_trace: string;
                        show_info: string;
                        rename: string;
                        change_mode: string;
                        take_control: string;
                        confirm_take_control: string;
                        read_only: string;
                        unavailable: string;
                        migrate: string;
                        duplicate: string;
                        field: {
                            name: string;
                            key: string;
                            description: string;
                            required: string;
                            default: string;
                            selector: string;
                            yaml_error: string;
                            key_not_null: string;
                            key_not_unique: string;
                            fields: string;
                            link_help_fields: string;
                            add_fields: string;
                            add_field: string;
                            field: string;
                            label: string;
                            field_selector: string;
                        };
                        header: string;
                        default_name: string;
                        modes: {
                            label: string;
                            learn_more: string;
                            single: string;
                            restart: string;
                            queued: string;
                            parallel: string;
                        };
                        max: {
                            queued: string;
                            parallel: string;
                        };
                        load_error_not_editable: string;
                        load_error_not_deletable: string;
                        load_error_unknown: string;
                        delete_confirm_title: string;
                        delete_confirm_text: string;
                        sequence: string;
                        sequence_sentence: string;
                        link_available_actions: string;
                        leave: {
                            unsaved_new_title: string;
                            unsaved_new_text: string;
                            unsaved_confirm_title: string;
                            unsaved_confirm_text: string;
                        };
                        paste_confirm: {
                            title: string;
                            text: string;
                        };
                        paste_toast_message: string;
                        paste_invalid_yaml: string;
                        paste_invalid_config: string;
                    };
                    trace: {
                        edit_script: string;
                    };
                };
                scene: {
                    caption: string;
                    description: string;
                    activated: string;
                    picker: {
                        header: string;
                        introduction: string;
                        learn_more: string;
                        pick_scene: string;
                        no_scenes: string;
                        add_scene: string;
                        only_editable: string;
                        edit_scene: string;
                        show_info: string;
                        apply: string;
                        delete_scene: string;
                        delete: string;
                        delete_confirm_title: string;
                        delete_confirm_text: string;
                        duplicate_scene: string;
                        duplicate: string;
                        headers: {
                            state: string;
                            name: string;
                            last_activated: string;
                            icon: string;
                        };
                        edit_category: string;
                        assign_category: string;
                        no_category_support: string;
                        no_category_entity_reg: string;
                        empty_header: string;
                        empty_text: string;
                        search: string;
                    };
                    editor: {
                        review_mode: string;
                        review_mode_detail: string;
                        live_edit: string;
                        live_edit_detail: string;
                        enter_live_mode_unsaved: string;
                        save_before_live: string;
                        switch_to_review_mode: string;
                        default_name: string;
                        load_error_not_editable: string;
                        load_error_unknown: string;
                        save: string;
                        rename: string;
                        missing_name: string;
                        unsaved_confirm_title: string;
                        unsaved_confirm_text: string;
                        name: string;
                        icon: string;
                        area: string;
                        dialog: {
                            add_icon: string;
                            add_area: string;
                            add_category: string;
                            add_labels: string;
                        };
                        devices: {
                            header: string;
                            introduction: string;
                            introduction_review: string;
                            add: string;
                            delete: string;
                        };
                        entities: {
                            header: string;
                            introduction: string;
                            introduction_review: string;
                            without_device: string;
                            add: string;
                            delete: string;
                        };
                    };
                };
                cloud: {
                    description_login: string;
                    description_not_login: string;
                    description_features: string;
                    login: {
                        title: string;
                        introduction: string;
                        introduction2: string;
                        introduction2a: string;
                        introduction3: string;
                        learn_more_link: string;
                        sign_in: string;
                        email: string;
                        email_error_msg: string;
                        password: string;
                        password_error_msg: string;
                        totp_code_prompt_title: string;
                        totp_code: string;
                        cancel: string;
                        submit: string;
                        forgot_password: string;
                        start_trial: string;
                        trial_info: string;
                        alert_password_change_required: string;
                        alert_email_confirm_necessary: string;
                        alert_mfa_code_required: string;
                        alert_mfa_expired_or_not_started: string;
                        alert_totp_code_invalid: string;
                        cloud_pipeline_title: string;
                        cloud_pipeline_text: string;
                    };
                    forgot_password: {
                        title: string;
                        subtitle: string;
                        instructions: string;
                        email: string;
                        email_error_msg: string;
                        send_reset_email: string;
                        check_your_email: string;
                    };
                    register: {
                        title: string;
                        headline: string;
                        information: string;
                        information2: string;
                        feature_remote_control: string;
                        feature_google_home: string;
                        feature_amazon_alexa: string;
                        feature_webhook_apps: string;
                        information3: string;
                        information3a: string;
                        information4: string;
                        link_terms_conditions: string;
                        link_privacy_policy: string;
                        create_account: string;
                        email_address: string;
                        email_error_msg: string;
                        password: string;
                        password_error_msg: string;
                        start_trial: string;
                        resend_confirm_email: string;
                        clicked_confirm: string;
                        confirm_email: string;
                        account_created: string;
                    };
                    account: {
                        download_support_package: string;
                        reset_cloud_data: string;
                        reset_data_confirm_title: string;
                        reset_data_confirm_text: string;
                        reset: string;
                        reset_data_failed: string;
                        thank_you_note: string;
                        nabu_casa_account: string;
                        connection_status: string;
                        manage_account: string;
                        sign_out: string;
                        sign_out_confirm: string;
                        integrations: string;
                        integrations_introduction: string;
                        integrations_introduction2: string;
                        integrations_link_all_features: string;
                        tip_moved_voice_assistants: string;
                        connected: string;
                        connecting: string;
                        not_connected: string;
                        fetching_subscription: string;
                        tts: {
                            title: string;
                            description: string;
                            default_language: string;
                            default_voice: string;
                            try: string;
                            dialog: {
                                header: string;
                                message: string;
                                example_message: string;
                                target: string;
                                target_browser: string;
                                play: string;
                                create_automation: string;
                            };
                        };
                        remote: {
                            title: string;
                            connected: string;
                            not_connected: string;
                            reconnecting: string;
                            access_is_being_prepared: string;
                            cerificate_loading: string;
                            cerificate_loaded: string;
                            cerificate_error: string;
                            info: string;
                            info_instance_will_be_available: string;
                            link_learn_how_it_works: string;
                            security_options: string;
                            external_activation: string;
                            external_activation_secondary: string;
                            drop_connection_warning_title: string;
                            drop_connection_warning: string;
                            certificate_info: string;
                            certificate_expire: string;
                            more_info: string;
                        };
                        ice_servers: {
                            title: string;
                            info: string;
                            link_learn_how_it_works: string;
                        };
                        alexa: {
                            title: string;
                            info: string;
                            enable_ha_skill: string;
                            config_documentation: string;
                            enable_state_reporting: string;
                            info_state_reporting: string;
                            state_reporting_error: string;
                            show_entities: string;
                            exposed_entities: string;
                            manual_config: string;
                            enable: string;
                            disable: string;
                            not_configured_title: string;
                            not_configured_text: string;
                            link_learn_how_it_works: string;
                            expose_new_entities: string;
                            expose_new_entities_info: string;
                        };
                        google: {
                            title: string;
                            info: string;
                            http_use_ssl_warning_title: string;
                            http_use_ssl_warning_text: string;
                            config_documentation: string;
                            enable_state_reporting: string;
                            info_state_reporting: string;
                            security_devices: string;
                            enter_pin_info: string;
                            devices_pin: string;
                            enter_pin_hint: string;
                            show_entities: string;
                            exposed_entities: string;
                            manual_config: string;
                            enter_pin_error: string;
                            not_configured_title: string;
                            not_configured_text: string;
                            link_learn_how_it_works: string;
                            expose_new_entities: string;
                            expose_new_entities_info: string;
                        };
                        webhooks: {
                            title: string;
                            info: string;
                            no_hooks_yet: string;
                            no_hooks_yet_link_integration: string;
                            no_hooks_yet2: string;
                            no_hooks_yet_link_automation: string;
                            link_learn_more: string;
                            loading: string;
                            manage: string;
                            disable_hook_error_msg: string;
                        };
                    };
                    dialog_certificate: {
                        alternative_names: string;
                        certificate_information: string;
                        certificate_expiration_date: string;
                        will_be_auto_renewed: string;
                        fingerprint: string;
                        close: string;
                    };
                    dialog_already_connected: {
                        heading: string;
                        description: string;
                        other_home_assistant: string;
                        instance_name: string;
                        instance_version: string;
                        ip_address: string;
                        connected_at: string;
                        obfuscated_ip: {
                            show: string;
                            hide: string;
                        };
                        info_backups: {
                            title: string;
                            description: string;
                        };
                        close: string;
                        login_here: string;
                    };
                    dialog_cloudhook: {
                        webhook_for: string;
                        managed_by_integration: string;
                        info_disable_webhook: string;
                        link_disable_webhook: string;
                        public_url: string;
                        view_documentation: string;
                        close: string;
                        confirm_disable_title: string;
                        confirm_disable_text: string;
                    };
                };
                devices: {
                    add_prompt: string;
                    add_prompt_enabled: string;
                    add_prompt_disabled: string;
                    add_device: string;
                    caption: string;
                    description: string;
                    filtering_by_config_entry: string;
                    device_info: string;
                    edit_settings: string;
                    restore_entity_ids: string;
                    quick_links: {
                        entities: string;
                        helpers: string;
                        automations: string;
                        scenes: string;
                        scripts: string;
                    };
                    unnamed_device: string;
                    unknown_error: string;
                    name: string;
                    update: string;
                    no_devices: string;
                    enabled_label: string;
                    enabled_cause: string;
                    disabled_by: {
                        user: string;
                        integration: string;
                        config_entry: string;
                    };
                    enabled_description: string;
                    open_configuration_url: string;
                    set_up_voice_assistant: string;
                    download_diagnostics: string;
                    download_diagnostics_integration: string;
                    delete_device: string;
                    delete_device_integration: string;
                    connected_devices: {
                        heading: string;
                        show_more: string;
                    };
                    type: {
                        device_heading: string;
                        device: string;
                        service_heading: string;
                        service: string;
                    };
                    automation: {
                        related_heading: string;
                        automations_scripts_or_scenes: string;
                        automations_heading: string;
                        automations: string;
                        no_automations: string;
                        unknown_automation: string;
                        create: string;
                        create_disable: string;
                        new: {
                            title: string;
                            description: string;
                        };
                        triggers: {
                            no_triggers: string;
                            unknown_trigger: string;
                        };
                        conditions: {
                            no_conditions: string;
                            unknown_condition: string;
                        };
                        actions: {
                            no_actions: string;
                            unknown_action: string;
                        };
                        no_device_automations: string;
                    };
                    script: {
                        scripts_heading: string;
                        scripts: string;
                        no_scripts: string;
                        create: string;
                        create_disable: string;
                        new: {
                            title: string;
                            description: string;
                        };
                    };
                    scene: {
                        scenes_heading: string;
                        scenes: string;
                        no_scenes: string;
                        create: string;
                        create_disable: string;
                    };
                    cant_edit: string;
                    device_not_found: string;
                    entities: {
                        entities: string;
                        control: string;
                        event: string;
                        sensor: string;
                        diagnostic: string;
                        notify: string;
                        assist: string;
                        config: string;
                        add_entities_lovelace: string;
                        none: string;
                        show_less: string;
                        disabled_entities: string;
                        hidden: string;
                    };
                    confirm_disable_config_entry_title: string;
                    confirm_disable_config_entry_message: string;
                    update_device_error: string;
                    disabled: string;
                    data_table: {
                        icon: string;
                        device: string;
                        manufacturer: string;
                        model: string;
                        integration: string;
                        firmware_version: string;
                        battery: string;
                        disabled_by: string;
                        no_devices: string;
                        no_integration: string;
                        unknown: string;
                    };
                    delete: string;
                    confirm_delete: string;
                    confirm_delete_integration: string;
                    error_delete: string;
                    picker: {
                        search: string;
                        state: string;
                        bulk_actions: {
                            move_area: string;
                            no_area: string;
                            add_area: string;
                            delete_selected: {
                                button: string;
                                confirm_title: string;
                                confirm_text: string;
                                confirm_partly_text: string;
                                partial_failure_title: string;
                                partial_failure: string;
                            };
                        };
                    };
                    esphome: {
                        show_encryption_key: string;
                        encryption_key_title: string;
                        encryption_key_description: string;
                    };
                };
                entities: {
                    caption: string;
                    description: string;
                    picker: {
                        header: string;
                        introduction: string;
                        introduction2: string;
                        search: string;
                        unnamed_entity: string;
                        filtering_by_config_entry: string;
                        status: {
                            available: string;
                            unavailable: string;
                            enabled: string;
                            disabled: string;
                            visible: string;
                            hidden: string;
                            not_provided: string;
                            unmanageable: string;
                        };
                        headers: {
                            state_icon: string;
                            entity: string;
                            device: string;
                            integration: string;
                            disabled_by: string;
                            status: string;
                            domain: string;
                            availability: string;
                            visibility: string;
                            enabled: string;
                        };
                        selected: string;
                        enable_selected: {
                            button: string;
                            confirm_title: string;
                            confirm_text: string;
                        };
                        disable_selected: {
                            button: string;
                            confirm_title: string;
                            confirm_text: string;
                        };
                        restore_entity_id_selected: {
                            button: string;
                            confirm_title: string;
                            confirm_text: string;
                            changes: string;
                        };
                        delete_selected: {
                            button: string;
                            confirm_title: string;
                            confirm_text: string;
                            confirm_partly_text: string;
                        };
                        hide_selected: {
                            button: string;
                            confirm_title: string;
                            confirm: string;
                        };
                        unhide_selected: {
                            button: string;
                        };
                    };
                };
                domains: {
                    caption: string;
                };
                person: {
                    caption: string;
                    introduction: string;
                    note_about_persons_configured_in_yaml: string;
                    learn_more: string;
                    no_persons_created_yet: string;
                    create_person: string;
                    add_person: string;
                    confirm_delete_title: string;
                    confirm_delete_text: string;
                    person_not_found_title: string;
                    person_not_found: string;
                    detail: {
                        new_person: string;
                        name: string;
                        name_error_msg: string;
                        linked_user: string;
                        device_tracker_intro: string;
                        no_device_tracker_available_intro: string;
                        link_presence_detection_integrations: string;
                        link_integrations_page: string;
                        device_tracker_picked: string;
                        device_tracker_pick: string;
                        delete: string;
                        update: string;
                        confirm_delete_user_title: string;
                        confirm_delete_user_text: string;
                        allow_login: string;
                        allow_login_description: string;
                        username: string;
                        password: string;
                        admin: string;
                        admin_description: string;
                        local_access_only: string;
                        local_access_only_description: string;
                        change_username: string;
                        change_password: string;
                    };
                };
                zone: {
                    caption: string;
                    description: string;
                    introduction: string;
                    no_zones_created_yet: string;
                    create_zone: string;
                    confirm_delete: string;
                    can_not_edit: string;
                    configured_in_yaml: string;
                    detail: {
                        new_zone: string;
                        name: string;
                        icon: string;
                        icon_error_msg: string;
                        location: string;
                        radius: string;
                        latitude: string;
                        longitude: string;
                        passive: string;
                        passive_note: string;
                        required_error_msg: string;
                        delete: string;
                        create: string;
                        update: string;
                    };
                    core_location_dialog: string;
                };
                integrations: {
                    caption: string;
                    description: string;
                    integration: string;
                    discovered: string;
                    discovered_devices: string;
                    manage_discovered: string;
                    manage_discovered_description: string;
                    disabled: string;
                    available_integrations: string;
                    new_flow: string;
                    attention: string;
                    configured: string;
                    new: string;
                    confirm_new: string;
                    add_integration: string;
                    no_integrations: string;
                    no_disabled_integrations: string;
                    no_ignored_integrations: string;
                    note_about_integrations: string;
                    note_about_website_reference: string;
                    home_assistant_website: string;
                    configure: string;
                    reconfigure: string;
                    none: string;
                    none_found: string;
                    none_found_detail: string;
                    integration_not_found: string;
                    details: string;
                    rename_dialog: string;
                    rename_input_label: string;
                    search: string;
                    search_brand: string;
                    search_helper: string;
                    add_zwave_js_device: string;
                    add_zha_device: string;
                    add_matter_device: string;
                    what_device_type: string;
                    what_to_add: string;
                    confirm_add_discovered: string;
                    disable: {
                        show_disabled: string;
                        disabled_integrations: string;
                        show: string;
                    };
                    ignore: {
                        ignore: string;
                        confirm_ignore_title: string;
                        confirm_ignore: string;
                        show_ignored: string;
                        ignored: string;
                        confirm_delete_ignore_title: string;
                        confirm_delete_ignore: string;
                        stop_ignore: string;
                    };
                    integration_page: {
                        entries: string;
                        entries_device: string;
                        entries_hub: string;
                        entries_service: string;
                        entries_helper: string;
                        entries_hardware: string;
                        entries_system: string;
                        entries_entity: string;
                        no_entries: string;
                        yaml_entry: string;
                        attention_entries: string;
                        add_entry: string;
                        add_device: string;
                        add_hub: string;
                        add_service: string;
                        add_helper: string;
                        add_hardware: string;
                        add_entity: string;
                        add_system: string;
                    };
                    config_entry: {
                        application_credentials: {
                            delete_title: string;
                            delete_prompt: string;
                            delete_detail: string;
                            delete_error_title: string;
                            dismiss: string;
                            learn_more: string;
                        };
                        device: {
                            enable: string;
                            disable: string;
                            confirm_disable_title: string;
                            confirm_disable_message: string;
                            configure: string;
                            edit: string;
                            delete: string;
                        };
                        devices: string;
                        entities: string;
                        services: string;
                        entries: string;
                        no_devices_or_entities: string;
                        devices_without_subentry: string;
                        copy: string;
                        rename: string;
                        configure: string;
                        system_options: string;
                        documentation: string;
                        download_diagnostics: string;
                        disable_debug_logging: string;
                        known_issues: string;
                        delete: string;
                        delete_confirm_title: string;
                        delete_confirm_text: string;
                        enable_debug_logging: string;
                        reconfigure: string;
                        reload: string;
                        restart_confirm: string;
                        reload_confirm: string;
                        reload_restart_confirm: string;
                        disable_restart_confirm: string;
                        enable_restart_confirm: string;
                        disable_confirm_title: string;
                        disable_confirm_text: string;
                        disable_error: string;
                        manuf: string;
                        via: string;
                        firmware: string;
                        hardware: string;
                        version: string;
                        serial_number: string;
                        unnamed_entry: string;
                        unknown_via_device: string;
                        area: string;
                        no_area: string;
                        not_loaded: string;
                        setup_in_progress: string;
                        check_the_logs: string;
                        disable: {
                            disabled: string;
                            disabled_cause: string;
                            disabled_by: {
                                user: string;
                                integration: string;
                                device: string;
                            };
                        };
                        custom_integration: string;
                        legacy_integration: string;
                        custom_overwrites_core: string;
                        depends_on_cloud: string;
                        yaml_only: string;
                        no_config_flow: string;
                        disabled_polling: string;
                        debug_logging_enabled: string;
                        state: {
                            loaded: string;
                            setup_error: string;
                            migration_error: string;
                            setup_retry: string;
                            not_loaded: string;
                            failed_unload: string;
                            setup_in_progress: string;
                        };
                        open_configuration_url: string;
                        bronze_quality: string;
                        silver_quality: string;
                        gold_quality: string;
                        platinum_quality: string;
                    };
                    config_flow: {
                        success: string;
                        device_created: string;
                        device_name: string;
                        aborted: string;
                        close: string;
                        finish: string;
                        finish_skip: string;
                        submit: string;
                        next: string;
                        preview: string;
                        yaml_only_title: string;
                        yaml_only: string;
                        open_documentation: string;
                        no_config_flow: string;
                        not_all_required_fields: string;
                        error_saving_device: string;
                        error_saving_entity: string;
                        created_config: string;
                        external_step: {
                            description: string;
                            open_site: string;
                        };
                        loading: {
                            loading_flow: string;
                            loading_step: string;
                            fallback_title: string;
                        };
                        error: string;
                        could_not_load: string;
                        not_loaded: string;
                        supported_brand_flow: string;
                        missing_zwave_zigbee_title: string;
                        missing_zwave_zigbee: string;
                        missing_matter: string;
                        supported_hardware: string;
                        proceed: string;
                        single_config_entry_title: string;
                        show_integration: string;
                        single_config_entry: string;
                    };
                };
                users: {
                    caption: string;
                    description: string;
                    users_privileges_note: string;
                    is_not_active: string;
                    is_system: string;
                    is_local: string;
                    is_owner: string;
                    picker: {
                        headers: {
                            name: string;
                            username: string;
                            group: string;
                            system: string;
                            is_active: string;
                            local: string;
                            icon: string;
                        };
                        add_user: string;
                    };
                    editor: {
                        caption: string;
                        name: string;
                        username: string;
                        password: string;
                        change_password: string;
                        change_username: string;
                        activate_user: string;
                        deactivate_user: string;
                        delete_user: string;
                        update_user: string;
                        id: string;
                        owner: string;
                        admin: string;
                        admin_description: string;
                        group: string;
                        active: string;
                        active_description: string;
                        local_access_only: string;
                        local_access_only_description: string;
                        system_generated: string;
                        system_generated_read_only_users: string;
                        unnamed_user: string;
                        confirm_user_deletion_title: string;
                        confirm_user_deletion_text: string;
                    };
                    add_user: {
                        caption: string;
                        password: string;
                        password_confirm: string;
                        password_not_match: string;
                        local_only: string;
                        create: string;
                    };
                    change_password: {
                        caption: string;
                        new_password: string;
                        password_confirm: string;
                        change: string;
                        password_no_match: string;
                        password_changed: string;
                    };
                    change_username: {
                        caption: string;
                        new_username: string;
                        change: string;
                        username_changed: string;
                        failed: string;
                    };
                };
                application_credentials: {
                    caption: string;
                    description: string;
                    editor: {
                        caption: string;
                        description: string;
                        missing_credentials: string;
                        missing_credentials_domain_link: string;
                        view_documentation: string;
                        add: string;
                        domain: string;
                        name: string;
                        client_id: string;
                        client_id_helper: string;
                        client_secret: string;
                        client_secret_helper: string;
                    };
                    picker: {
                        add_application_credential: string;
                        headers: {
                            name: string;
                            client_id: string;
                            application: string;
                        };
                        remove: {
                            button: string;
                            confirm_title: string;
                        };
                        remove_selected: {
                            button: string;
                            confirm_title: string;
                            confirm_text: string;
                            error_title: string;
                        };
                        selected: string;
                    };
                };
                mqtt: {
                    title: string;
                    settings_title: string;
                    option_flow: string;
                    description_publish: string;
                    topic: string;
                    payload: string;
                    publish: string;
                    description_listen: string;
                    json_formatting: string;
                    listening_to: string;
                    subscribe_to: string;
                    start_listening: string;
                    stop_listening: string;
                    message_received: string;
                    qos: string;
                    retain: string;
                };
                bluetooth: {
                    title: string;
                    adapters_count: string;
                    connections_count: string;
                    advertisements_count: string;
                    status_online: string;
                    status_warning: string;
                    status_offline: string;
                    connections_summary: string;
                    adapter_info_title: string;
                    my_network: string;
                    show_map: string;
                    navigation: {
                        adapter_info: string;
                        adapter_info_description: string;
                        advertisements: string;
                        advertisements_description: string;
                        connections: string;
                        connections_description: string;
                        visualization: string;
                    };
                    disabled_by_user: string;
                    manage_integration: string;
                    option_flow: string;
                    no_connections: string;
                    active_connections: string;
                    no_advertisements_found: string;
                    no_connection_slot_allocations: string;
                    no_connection_slots: string;
                    no_scanner_state_available: string;
                    scanner_state_unknown: string;
                    scanning_mode_none: string;
                    scanning_mode_active: string;
                    scanning_mode_passive: string;
                    scanning_mode_active_label: string;
                    scanning_mode_passive_label: string;
                    scanning_mode_auto_with_current: string;
                    scanning_mode_none_label: string;
                    scanner_mode_mismatch: string;
                    scanner_mode_mismatch_remote: string;
                    scanner_mode_mismatch_usb: string;
                    scanner_mode_mismatch_uart: string;
                    address: string;
                    name: string;
                    source: string;
                    rssi: string;
                    source_address: string;
                    updated: string;
                    device: string;
                    device_information: string;
                    advertisement_data: string;
                    manufacturer_data: string;
                    service_data: string;
                    service_uuids: string;
                    raw_advertisement: string;
                    copy_to_clipboard: string;
                    area: string;
                    scanners: string;
                    known_devices: string;
                    unknown_devices: string;
                };
                dhcp: {
                    title: string;
                    mac_address: string;
                    hostname: string;
                    ip_address: string;
                    no_devices_found: string;
                };
                thread: {
                    other_networks: string;
                    my_network: string;
                    no_preferred_network: string;
                    more_info: string;
                    add_open_thread_border_router: string;
                    reset_border_router: string;
                    add_to_my_network: string;
                    default_router_not_found: string;
                    default_router: string;
                    set_default_router: string;
                    no_routers_otbr_network: string;
                    add_dataset_from_tlv: string;
                    add_dataset: string;
                    add_dataset_label: string;
                    add_dataset_button: string;
                    confirm_reset_border_router: string;
                    confirm_reset_border_router_text: string;
                    confirm_set_dataset_border_router: string;
                    confirm_set_dataset_border_router_text: string;
                    otbr_config_failed: string;
                    confirm_delete_dataset: string;
                    confirm_delete_dataset_text: string;
                    no_border_routers: string;
                    no_preferred_router: string;
                    border_routers: string;
                    managed_by_home_assistant: string;
                    operational_dataset: string;
                    change_channel: string;
                    change_channel_initiated_title: string;
                    change_channel_initiated_text: string;
                    change_channel_invalid: string;
                    change_channel_label: string;
                    change_channel_multiprotocol_enabled_title: string;
                    change_channel_multiprotocol_enabled_text: string;
                    change_channel_range: string;
                    change_channel_text: string;
                    thread_network_info: string;
                    thread_network_delete_credentials: string;
                    thread_network_send_credentials_ha: string;
                    thread_network_send_credentials_ha_description: string;
                    thread_network_send_credentials_phone: string;
                    thread_network_send_credentials_phone_description: string;
                    thread_network_make_preferred: string;
                };
                ssdp: {
                    name: string;
                    ssdp_st: string;
                    ssdp_location: string;
                    ssdp_headers: string;
                    upnp: string;
                    discovery_information: string;
                    copy_to_clipboard: string;
                    no_devices_found: string;
                    show_raw_data: string;
                    raw_data_title: string;
                };
                zeroconf: {
                    name: string;
                    type: string;
                    port: string;
                    ip_addresses: string;
                    properties: string;
                    discovery_information: string;
                    copy_to_clipboard: string;
                    no_devices_found: string;
                };
                zha: {
                    common: {
                        clusters: string;
                        manufacturer_code_override: string;
                        value: string;
                    };
                    configuration_page: {
                        status_title: string;
                        status_online: string;
                        status_offline: string;
                        devices: string;
                        devices_offline: string;
                        device_count: string;
                        entity_count: string;
                        group_count: string;
                        show_map: string;
                        update_button: string;
                        download_backup: string;
                        download_backup_description: string;
                        download_backup_action: string;
                        migrate_radio: string;
                        migrate_radio_description: string;
                        migrate_radio_action: string;
                        group_members_assume_state_label: string;
                        enable_identify_on_join_label: string;
                        default_light_transition_label: string;
                        enhanced_light_transition_label: string;
                        light_transitioning_flag_label: string;
                        consider_unavailable_mains_label: string;
                        consider_unavailable_battery_label: string;
                        enable_mains_startup_polling_label: string;
                        my_network_title: string;
                        options_title: string;
                        options_description: string;
                        network_info_title: string;
                        network_info_description: string;
                        backup_restore_title: string;
                        backup_restore_description_short: string;
                        backup_restore_description: string;
                        group_members_assume_state_description: string;
                        enable_identify_on_join_description: string;
                        channel_description: string;
                        default_light_transition_description: string;
                        enhanced_light_transition_description: string;
                        light_transitioning_flag_description: string;
                        consider_unavailable_mains_description: string;
                        consider_unavailable_battery_description: string;
                        enable_mains_startup_polling_description: string;
                        channel_label: string;
                        radio_type: string;
                        serial_port: string;
                        baudrate: string;
                        custom_seconds: string;
                        timeout_30_min: string;
                        timeout_1_hour: string;
                        timeout_2_hours: string;
                        timeout_6_hours: string;
                        timeout_12_hours: string;
                        timeout_24_hours: string;
                        timeout_default: string;
                        timeout_custom: string;
                        change_channel: string;
                        channel_dialog: {
                            title: string;
                            text: string;
                        };
                    };
                    add_device_page: {
                        spinner: string;
                        pairing_mode: string;
                        pairing_mode_link: string;
                        discovered_text: string;
                        no_devices_found: string;
                        search_again: string;
                    };
                    add_device: string;
                    clusters: {
                        header: string;
                        help_cluster_dropdown: string;
                        tabs: {
                            attributes: string;
                            commands: string;
                        };
                    };
                    cluster_attributes: {
                        header: string;
                        introduction: string;
                        attributes_of_cluster: string;
                        read_zigbee_attribute: string;
                        write_zigbee_attribute: string;
                    };
                    cluster_commands: {
                        header: string;
                        introduction: string;
                        commands_of_cluster: string;
                        issue_zigbee_command: string;
                        help_command_dropdown: string;
                    };
                    device_pairing_card: {
                        PAIRED: string;
                        PAIRED_status_text: string;
                        INTERVIEW_COMPLETE: string;
                        INTERVIEW_COMPLETE_status_text: string;
                        CONFIGURED: string;
                        CONFIGURED_status_text: string;
                        INITIALIZED: string;
                        INITIALIZED_status_text: string;
                    };
                    network: {
                        caption: string;
                    };
                    groups: {
                        add_group: string;
                        caption: string;
                        groups: string;
                        group_id: string;
                        members: string;
                        group_info: string;
                        group_details: string;
                        group_not_found: string;
                        add_members: string;
                        remove_members: string;
                        removing_members: string;
                        no_members: string;
                        no_devices_found: string;
                        no_devices_to_add: string;
                        no_entities: string;
                        entity_count: string;
                        entity_count_plural: string;
                        open_device: string;
                        create_group_details: string;
                        group_name_placeholder: string;
                        group_id_placeholder: string;
                        create_group: string;
                        create: string;
                        creating_group: string;
                        delete: string;
                        endpoint: string;
                        associated_entities: string;
                        no_associated_entities: string;
                    };
                    visualization: {
                        header: string;
                        caption: string;
                        refresh_topology: string;
                        device: string;
                        device_type: string;
                        device_not_in_db: string;
                        area: string;
                        coordinator: string;
                        router: string;
                        end_device: string;
                        offline: string;
                    };
                    device_binding: {
                        bind: string;
                        unbind: string;
                        picker_label: string;
                    };
                    group_binding: {
                        header: string;
                        introduction: string;
                        group_picker_label: string;
                        group_picker_help: string;
                        cluster_selection_help: string;
                        bind_button_label: string;
                        unbind_button_label: string;
                        bind_button_help: string;
                        unbind_button_help: string;
                    };
                    neighbors: {
                        name: string;
                        lqi: string;
                        relationship: string;
                        depth: string;
                    };
                    change_channel_dialog: {
                        title: string;
                        new_channel: string;
                        change_channel: string;
                        migration_warning_title: string;
                        migration_warning: string;
                        description: string;
                        smart_explanation: string;
                        channel_has_been_changed: string;
                        devices_will_rejoin: string;
                        channel_auto: string;
                    };
                };
                zwave_js: {
                    navigation: {
                        general: string;
                        statistics: string;
                        logs: string;
                        visualization: string;
                    };
                    common: {
                        network: string;
                        node_id: string;
                        home_id: string;
                        source: string;
                        back: string;
                        add_node: string;
                        remove_node: string;
                        remove_a_node: string;
                        rebuild_network_routes: string;
                        in_progress_inclusion_exclusion: string;
                        cancel_inclusion_exclusion: string;
                    };
                    dashboard: {
                        network_card_title: string;
                        show_map: string;
                        options_title: string;
                        options_description: string;
                        network_info_title: string;
                        network_info_description: string;
                        visualization_description: string;
                        statistics_description: string;
                        logs_description: string;
                        analytics_title: string;
                        analytics_description: string;
                        analytics_on: string;
                        analytics_off: string;
                        driver_version: string;
                        server_version: string;
                        home_id: string;
                        server_url: string;
                        devices: string;
                        device_count: string;
                        entity_count: string;
                        provisioned_devices: string;
                        provisioned_count: string;
                        not_included: string;
                        devices_offline: string;
                        rebuild_routes_description: string;
                        rebuild_routes_action: string;
                        remove_node_description: string;
                        remove_node_action: string;
                        nvm_backup: {
                            title: string;
                            download_backup: string;
                            download_backup_description: string;
                            download_action: string;
                            restore_backup: string;
                            restore_backup_description: string;
                            restore_action: string;
                            backup_failed: string;
                            restore_complete: string;
                            restore_failed: string;
                            creating: string;
                            restoring: string;
                            migrate: string;
                            migrate_description: string;
                            migrate_action: string;
                        };
                        data_collection: {
                            title: string;
                            info: string;
                            documentation_link: string;
                            toggle_title: string;
                            toggle_description: string;
                        };
                        statistics: {
                            title: string;
                            messages_tx: {
                                label: string;
                                tooltip: string;
                            };
                            messages_rx: {
                                label: string;
                                tooltip: string;
                            };
                            messages_dropped_tx: {
                                label: string;
                                tooltip: string;
                            };
                            messages_dropped_rx: {
                                label: string;
                                tooltip: string;
                            };
                            nak: {
                                label: string;
                                tooltip: string;
                            };
                            can: {
                                label: string;
                                tooltip: string;
                            };
                            timeout_ack: {
                                label: string;
                                tooltip: string;
                            };
                            timeout_response: {
                                label: string;
                                tooltip: string;
                            };
                            timeout_callback: {
                                label: string;
                                tooltip: string;
                            };
                        };
                    };
                    device_info: {
                        zwave_info: string;
                        node_id: string;
                        node_ready: string;
                        device_config: string;
                        reinterview_device: string;
                        rebuild_routes: string;
                        update_firmware: string;
                        highest_security: string;
                        hard_reset_controller: string;
                        unknown: string;
                        zwave_plus: string;
                        zwave_plus_version: string;
                        node_statistics: string;
                        custom_device_config: string;
                    };
                    hard_reset_controller: {
                        NotStarted: {
                            title: string;
                            body: string;
                        };
                        InProgress: {
                            title: string;
                            body: string;
                        };
                        Done: {
                            title: string;
                            body: string;
                        };
                        confirmation: string;
                    };
                    node_statistics: {
                        title: string;
                        commands_tx: {
                            label: string;
                            tooltip: string;
                        };
                        commands_rx: {
                            label: string;
                            tooltip: string;
                        };
                        commands_dropped_tx: {
                            label: string;
                            tooltip: string;
                        };
                        commands_dropped_rx: {
                            label: string;
                            tooltip: string;
                        };
                        timeout_response: {
                            label: string;
                            tooltip: string;
                        };
                        rtt: {
                            label: string;
                            tooltip: string;
                        };
                        rssi: {
                            label: string;
                            tooltip: string;
                        };
                        lwr: string;
                        nlwr: string;
                    };
                    route_statistics: {
                        protocol: {
                            label: string;
                            tooltip: string;
                            protocol_data_rate: {
                                ZWave_9k6: string;
                                ZWave_40k: string;
                                ZWave_100k: string;
                                LongRange_100k: string;
                            };
                        };
                        data_rate: {
                            label: string;
                            tooltip: string;
                            protocol_data_rate: {
                                ZWave_9k6: string;
                                ZWave_40k: string;
                                ZWave_100k: string;
                                LongRange_100k: string;
                            };
                        };
                        repeaters: {
                            label: string;
                            tooltip: string;
                            repeaters: string;
                            rssi: string;
                            direct: string;
                        };
                        rssi: {
                            label: string;
                            tooltip: string;
                        };
                        route_failed_between: {
                            label: string;
                            tooltip: string;
                            not_applicable: string;
                        };
                    };
                    rssi: {
                        unit: string;
                        rssi_error: {
                            NotAvailable: string;
                            ReceiverSaturated: string;
                            NoSignalDetected: string;
                        };
                    };
                    node_config: {
                        header: string;
                        introduction: string;
                        attribution: string;
                        endpoint: string;
                        zwave_js_device_database: string;
                        battery_device_notice: string;
                        parameter_is_read_only: string;
                        between_min_max: string;
                        error_not_in_range: string;
                        error_not_numeric: string;
                        error_required: string;
                        error_device_not_found: string;
                        set_param_accepted: string;
                        set_param_queued: string;
                        set_param_error: string;
                        parameter: string;
                        bitmask: string;
                        size: string;
                        value: string;
                        format: string;
                        custom_config: string;
                        custom_config_description: string;
                        get_value: string;
                        set_value: string;
                        signed: string;
                        unsigned: string;
                        enumerated: string;
                        bitfield: string;
                        reset_to_default: {
                            button_label: string;
                            dialog: {
                                title: string;
                                text: string;
                                text_loading: string;
                                text_success: string;
                                text_error: string;
                                reset: string;
                                cancel: string;
                            };
                        };
                        default: string;
                    };
                    network_status: {
                        online: string;
                        offline: string;
                        online_named: string;
                        offline_named: string;
                    };
                    add_node: {
                        title: string;
                        searching_devices: string;
                        follow_device_instructions: string;
                        security_options: string;
                        choose_inclusion_strategy: string;
                        add_device_failed: string;
                        inclusion_failed: string;
                        getting_device_information: string;
                        saving_device: string;
                        check_logs: string;
                        timeout_error: string;
                        select_method: {
                            webcam_unsupported: string;
                            qr_code_webcam: string;
                            qr_code_webcam_description: string;
                            qr_code_manual: string;
                            qr_code_manual_description: string;
                            search_device: string;
                            search_device_description: string;
                        };
                        qr: {
                            manual: {
                                title: string;
                                text: string;
                                placeholder: string;
                            };
                            scan_code: string;
                            other_add_options: string;
                            invalid_code: string;
                            unsupported_code: string;
                        };
                        specific_device: {
                            title: string;
                            turn_on_device: string;
                            turn_on_device_description: string;
                            add_another_z_wave_device: string;
                            close_description: string;
                        };
                        select_strategy: {
                            title: string;
                            default_label: string;
                            default_description: string;
                            s0_label: string;
                            s0_description: string;
                            insecure_label: string;
                            insecure_description: string;
                            inclusion_strategy: string;
                        };
                        configure_device: {
                            title: string;
                            device_name: string;
                            device_area: string;
                            choose_network_type: string;
                            long_range_description: string;
                            mesh_label: string;
                            mesh_description: string;
                            add_device: string;
                            save_device_failed: string;
                        };
                        validate_dsk_pin: {
                            title: string;
                            text: string;
                            placeholder: string;
                        };
                        added_insecure: {
                            title: string;
                            text: string;
                            added_insecurely_text: string;
                            try_again_text: string;
                            view_device: string;
                            low_security_reason: {
                                "0": string;
                                "1": string;
                                "2": string;
                                "3": string;
                                "4": string;
                                "5": string;
                                "6": string;
                                "7": string;
                                "8": string;
                            };
                        };
                        grant_security_classes: {
                            title: string;
                            description: string;
                        };
                    };
                    provisioned: {
                        caption: string;
                        name: string;
                        dsk: string;
                        security_classes: string;
                        unprovision: string;
                        included: string;
                        not_included: string;
                        confirm_unprovision_title: string;
                        confirm_unprovision_text: string;
                        confirm_unprovision_text_included: string;
                        active: string;
                    };
                    security_classes: {
                        None: {
                            title: string;
                        };
                        S2_Unauthenticated: {
                            title: string;
                            description: string;
                        };
                        S2_Authenticated: {
                            title: string;
                            description: string;
                        };
                        S2_AccessControl: {
                            title: string;
                            description: string;
                        };
                        S0_Legacy: {
                            title: string;
                            description: string;
                        };
                    };
                    remove_node: {
                        title: string;
                        introduction: string;
                        exclusion_intro: string;
                        failed_node_intro: string;
                        menu_exclude_device: string;
                        menu_remove_device: string;
                        start_exclusion: string;
                        cancel_exclusion: string;
                        ready_to_remove: string;
                        follow_device_instructions: string;
                        trigger_device_exclusion: string;
                        removing_device: string;
                        exclusion_failed: string;
                        exclusion_finished: string;
                    };
                    reinterview_node: {
                        title: string;
                        introduction: string;
                        battery_device_warning: string;
                        run_in_background: string;
                        start_reinterview: string;
                        in_progress: string;
                        interview_failed: string;
                        interview_complete: string;
                    };
                    rebuild_network_routes: {
                        title: string;
                        introduction: string;
                        traffic_warning: string;
                        start_rebuilding_routes: string;
                        in_progress: string;
                        run_in_background: string;
                        stop_rebuilding_routes: string;
                        rebuilding_routes_complete: string;
                        rebuilding_routes_failed: string;
                        rebuilding_routes_cancelled: string;
                        progress: {
                            in_progress: string;
                            completed: string;
                            failed: string;
                            skipped: string;
                        };
                        details: {
                            pending: string;
                            done: string;
                            failed: string;
                            skipped: string;
                            no_devices: string;
                        };
                    };
                    rebuild_node_routes: {
                        title: string;
                        introduction: string;
                        traffic_warning: string;
                        start_rebuilding_routes: string;
                        rebuilding_routes_failed: string;
                        rebuilding_routes_failed_check_logs: string;
                        rebuilding_routes_complete: string;
                        in_progress: string;
                        routes_rebuild_in_progress: string;
                    };
                    update_firmware: {
                        title: string;
                        warning: string;
                        warning_controller: string;
                        introduction: string;
                        introduction_controller: string;
                        firmware_target_intro: string;
                        firmware_target: string;
                        uploading: string;
                        device_asleep: string;
                        upload_firmware: string;
                        upload_failed: string;
                        begin_update: string;
                        queued: string;
                        close_queued: string;
                        awake: string;
                        close: string;
                        in_progress: string;
                        abort: string;
                        abort_failed: string;
                        confirm_abort: string;
                        finished_status: {
                            success: string;
                            error: string;
                            try_again: string;
                            done: string;
                            done_controller: string;
                            Error_Timeout: string;
                            Error_Checksum: string;
                            Error_TransmissionFailed: string;
                            Error_InvalidManufacturerID: string;
                            Error_InvalidFirmwareID: string;
                            Error_InvalidFirmwareTarget: string;
                            Error_InvalidHeaderInformation: string;
                            Error_InvalidHeaderFormat: string;
                            Error_InsufficientMemory: string;
                            Error_InvalidHardwareVersion: string;
                            OK_WaitingForActivation: string;
                            OK_NoRestart: string;
                            OK_RestartPending: string;
                            Error_RetryLimitReached: string;
                            Error_Aborted: string;
                            Error_NotSupported: string;
                            OK: string;
                        };
                    };
                    logs: {
                        caption: string;
                        title: string;
                        log_level: string;
                        subscribed_to_logs: string;
                        log_level_changed: string;
                        download_logs: string;
                    };
                    visualization: {
                        controller: string;
                        node: string;
                        asleep_node: string;
                        dead_node: string;
                        toggle_live: string;
                        node_id: string;
                        manufacturer: string;
                        model: string;
                        status: string;
                        version: string;
                        data_rate: string;
                        area: string;
                    };
                    node_status: {
                        "0": string;
                        "1": string;
                        "2": string;
                        "3": string;
                        "4": string;
                    };
                    protocol_data_rate: {
                        "0": string;
                        "1": string;
                        "2": string;
                        "3": string;
                        "4": string;
                    };
                    picker: {
                        title: string;
                        no_entries: string;
                    };
                    credentials: {
                        manage: string;
                        dialog_title: string;
                        users: {
                            title: string;
                            add: string;
                            edit: string;
                            delete: string;
                            delete_all: string;
                            name: string;
                            type: string;
                            no_users: string;
                            unnamed_user: string;
                            credential_count: string;
                            user_types: {
                                general: {
                                    label: string;
                                    description: string;
                                };
                                programming: {
                                    label: string;
                                    description: string;
                                };
                                non_access: {
                                    label: string;
                                    description: string;
                                };
                                duress: {
                                    label: string;
                                    description: string;
                                };
                                disposable: {
                                    label: string;
                                    description: string;
                                };
                                expiring: {
                                    label: string;
                                    description: string;
                                };
                                remote_only: {
                                    label: string;
                                    description: string;
                                };
                            };
                        };
                        credential_types: {
                            pin_code: string;
                            password: string;
                        };
                        credential_data: {
                            type: string;
                            pin_code: string;
                            password: string;
                            placeholder: string;
                            placeholder_pin: string;
                        };
                        errors: {
                            load_failed: string;
                            save_failed: string;
                            empty_response: string;
                            no_user_management: string;
                            no_compatible_credential_types: string;
                            no_compatible_user_types: string;
                            name_required: string;
                            credential_required: string;
                            credential_length: string;
                            pin_digits_only: string;
                            add_user_failed: string;
                        };
                        confirm_delete_user: string;
                        confirm_delete_all_users: string;
                    };
                };
                matter: {
                    panel: {
                        thread_panel: string;
                        thread_panel_description: string;
                        add_device: string;
                        status_online: string;
                        status_offline: string;
                        my_network_title: string;
                        devices: string;
                        device_count: string;
                        entity_count: string;
                        options_title: string;
                        options_description: string;
                        mobile_app_commisioning: string;
                        mobile_app_commisioning_description: string;
                        mobile_app_commisioning_action: string;
                        commission_device: string;
                        commission_device_description: string;
                        commission_device_action: string;
                        add_shared_device: string;
                        add_shared_device_description: string;
                        add_shared_device_action: string;
                        set_wifi_credentials: string;
                        set_wifi_credentials_description: string;
                        set_wifi_credentials_action: string;
                        set_thread_credentials: string;
                        set_thread_credentials_description: string;
                        set_thread_credentials_action: string;
                        prompts: {
                            network_name: {
                                title: string;
                                input_label: string;
                                confirm: string;
                            };
                            passcode: {
                                title: string;
                                input_label: string;
                                confirm: string;
                            };
                            commission_device: {
                                title: string;
                                input_label: string;
                                confirm: string;
                            };
                            add_shared_device: {
                                title: string;
                                input_label: string;
                                confirm: string;
                            };
                            set_thread: {
                                title: string;
                                input_label: string;
                                confirm: string;
                            };
                        };
                    };
                    network_type: {
                        thread: string;
                        wifi: string;
                        ethernet: string;
                        unknown: string;
                    };
                    node_type: {
                        end_device: string;
                        sleepy_end_device: string;
                        routing_end_device: string;
                        bridge: string;
                        unknown: string;
                    };
                    device_info: {
                        matter_info: string;
                        node_id: string;
                        network_type: string;
                        node_type: string;
                        network_name: string;
                        ip_adresses: string;
                        mac_address: string;
                        available: string;
                    };
                    device_actions: {
                        reinterview_device: string;
                        ping_device: string;
                        open_commissioning_window: string;
                        manage_fabrics: string;
                        manage_lock: string;
                        view_thread_network: string;
                    };
                    manage_fabrics: {
                        title: string;
                        fabrics: string;
                        remove_fabric_confirm_header: string;
                        remove_fabric_confirm_text: string;
                        remove_fabric_failed_header: string;
                        remove_fabric_failed_text: string;
                    };
                    reinterview_node: {
                        title: string;
                        introduction: string;
                        battery_device_warning: string;
                        run_in_background: string;
                        start_reinterview: string;
                        in_progress: string;
                        interview_failed: string;
                        interview_complete: string;
                    };
                    ping_node: {
                        title: string;
                        introduction: string;
                        battery_device_warning: string;
                        start_ping: string;
                        in_progress: string;
                        ping_failed: string;
                        ping_complete: string;
                        no_ip_found: string;
                    };
                    open_commissioning_window: {
                        title: string;
                        description: string;
                        prevent_misuse_description: string;
                        start_commissioning: string;
                        in_progress: string;
                        failed: string;
                        success: string;
                        scan_code: string;
                        copy_code: string;
                    };
                    lock: {
                        manage: string;
                        dialog_title: string;
                        users: {
                            title: string;
                            add: string;
                            edit: string;
                            delete: string;
                            name: string;
                            status: string;
                            type: string;
                            credential_rule: string;
                            credentials: string;
                            no_users: string;
                            user_status: {
                                available: string;
                                occupied_enabled: string;
                                occupied_disabled: string;
                            };
                            user_type: {
                                unrestricted_user: string;
                                year_day_schedule_user: string;
                                week_day_schedule_user: string;
                                programming_user: string;
                                non_access_user: string;
                                forced_user: string;
                                disposable_user: string;
                                expiring_user: string;
                                schedule_restricted_user: string;
                                remote_only_user: string;
                            };
                            credential_rules: {
                                single: string;
                                dual: string;
                                tri: string;
                            };
                            user_types: {
                                unrestricted_user: {
                                    label: string;
                                    description: string;
                                };
                                disposable_user: {
                                    label: string;
                                    description: string;
                                };
                            };
                        };
                        credentials: {
                            add: string;
                            edit: string;
                            delete: string;
                            type: string;
                            data: string;
                            pin: string;
                            types: {
                                pin: string;
                                rfid: string;
                                fingerprint: string;
                                finger_vein: string;
                                face: string;
                                aliro_credential: string;
                                aliro_evictable: string;
                                aliro_non_evictable: string;
                            };
                        };
                        events: {
                            title: string;
                            types: {
                                lock: string;
                                unlock: string;
                                lock_jammed: string;
                                lock_failure: string;
                                invalid_pin: string;
                            };
                            sources: {
                                manual: string;
                                pin: string;
                                remote: string;
                                auto: string;
                            };
                            no_events: string;
                        };
                        errors: {
                            load_failed: string;
                            save_failed: string;
                            not_supported: string;
                            no_user_management: string;
                            pin_not_supported: string;
                            no_credential_types_supported: string;
                            learn_more: string;
                            user_not_found: string;
                            name_required: string;
                            pin_required: string;
                            pin_length: string;
                            pin_digits_only: string;
                            pin_placeholder: string;
                        };
                        confirm_delete_user: string;
                        confirm_delete_credential: string;
                    };
                };
                tips: {
                    tip: string;
                    join: string;
                    social_media: string;
                    join_forums: string;
                    join_chat: string;
                    join_blog: string;
                    join_newsletter: string;
                    media_storage: string;
                };
                analytics: {
                    caption: string;
                    header: string;
                    description: string;
                    preferences: {
                        base: {
                            title: string;
                            description: string;
                        };
                        usage: {
                            title: string;
                            description: string;
                        };
                        statistics: {
                            title: string;
                            description: string;
                        };
                        diagnostics: {
                            title: string;
                            description: string;
                        };
                        snapshots: {
                            title: string;
                            description: string;
                            header: string;
                            info: string;
                            data_use_statement: string;
                            alert: {
                                title: string;
                                content: string;
                            };
                        };
                    };
                    need_base_enabled: string;
                    learn_more: string;
                    intro: string;
                    download_device_info: string;
                };
                ai_tasks: {
                    caption: string;
                    description: string;
                };
                labs: {
                    caption: string;
                    custom_integration: string;
                    description: string;
                    description_enabled: string;
                    intro_title: string;
                    intro_subtitle: string;
                    intro_description: string;
                    intro_warning: string;
                    empty: {
                        title: string;
                        description: string;
                    };
                    learn_more: string;
                    provide_feedback: string;
                    report_issue: string;
                    enable: string;
                    disable: string;
                    enable_title: string;
                    enable_confirmation: string;
                    disable_title: string;
                    disable_confirmation: string;
                    enabled_success: string;
                    disabled_success: string;
                    enable_failed: string;
                    disable_failed: string;
                    progress: {
                        creating_backup: string;
                        backing_up_before_enabling: string;
                        backing_up_before_disabling: string;
                    };
                    create_backup: {
                        automatic: string;
                        automatic_description_last: string;
                        automatic_description_none: string;
                        manual: string;
                        manual_description: string;
                    };
                };
                network: {
                    caption: string;
                    description: string;
                    enabled: string;
                    disabled: string;
                    supervisor: {
                        title: string;
                        connected_to: string;
                        scan_ap: string;
                        reset: string;
                        signal_strength: string;
                        open: string;
                        wep: string;
                        wpa: string;
                        wifi: string;
                        wifi_password: string;
                        warning: string;
                        static: string;
                        auto: string;
                        disabled: string;
                        ip: string;
                        netmask: string;
                        prefix: string;
                        add_address: string;
                        gateway: string;
                        dns_server: string;
                        add_dns_server: string;
                        custom_dns: string;
                        unsaved: string;
                        failed_to_change: string;
                        hostname: {
                            title: string;
                            description: string;
                            failed_to_set_hostname: string;
                        };
                    };
                    discovery: {
                        title: string;
                        description: string;
                        dhcp: string;
                        dhcp_info: string;
                        ssdp: string;
                        ssdp_info: string;
                        zeroconf: string;
                        zeroconf_info: string;
                    };
                    network_adapter: string;
                    network_adapter_info: string;
                    ip_information: string;
                    adapter: {
                        auto_configure: string;
                        auto_configure_manual_hint: string;
                        detected: string;
                        adapter: string;
                    };
                };
                storage: {
                    caption: string;
                    description: string;
                    used_space: string;
                    detailed_description: string;
                    loading_detailed: string;
                    segments: {
                        used: string;
                        free: string;
                        system: string;
                        addons_data: string;
                        addons_config: string;
                        media: string;
                        share: string;
                        backup: string;
                        homeassistant: string;
                        ssl: string;
                    };
                    lifetime: string;
                    lifetime_description: string;
                    lifetime_used_description: string;
                    disk_metrics: string;
                    change_chart_type: string;
                    datadisk: {
                        title: string;
                        description: string;
                        extra_information: string;
                        select_device: string;
                        no_devices_title: string;
                        no_devices_text: string;
                        moving_desc: string;
                        moving: string;
                        loading_devices: string;
                        cancel: string;
                        failed_to_move: string;
                        move: string;
                    };
                    network_mounts: {
                        title: string;
                        add_title: string;
                        update_title: string;
                        no_mounts: string;
                        documentation: string;
                        not_supported: {
                            title: string;
                            supervised: string;
                            os: string;
                            navigate_to_updates: string;
                        };
                        mount_usage: {
                            backup: string;
                            media: string;
                            share: string;
                        };
                        mount_type: {
                            nfs: string;
                            cifs: string;
                        };
                        cifs_versions: {
                            auto: string;
                            legacy: string;
                        };
                        options: {
                            name: {
                                title: string;
                                description: string;
                            };
                            share: {
                                title: string;
                                description: string;
                            };
                            server: {
                                title: string;
                                description: string;
                            };
                            default_backup_mount: {
                                title: string;
                                description: string;
                            };
                            path: {
                                title: string;
                                description: string;
                            };
                            type: {
                                title: string;
                                description: string;
                            };
                            usage: {
                                title: string;
                                description: string;
                            };
                            version: {
                                title: string;
                                description: string;
                            };
                            username: {
                                title: string;
                                description: string;
                            };
                            password: {
                                title: string;
                                description: string;
                            };
                        };
                        connect: string;
                        update: string;
                        errors: {
                            reload: string;
                            invalid_name: string;
                        };
                        warnings: {
                            not_recomeded_cifs_version: string;
                        };
                    };
                };
                system_health: {
                    caption: string;
                    description: string;
                    cpu_usage: string;
                    ram_usage: string;
                    core_stats: string;
                    supervisor_stats: string;
                    integration_start_time: string;
                };
                system_dashboard: {
                    restart_homeassistant: string;
                };
            };
            lovelace: {
                strategy: {
                    "original-states": {
                        helpers: string;
                        empty_state_title: string;
                        empty_state_content: string;
                        empty_state_action: string;
                    };
                    areas: {
                        sensors: string;
                        sensors_description: string;
                        edit_the_area: string;
                        groups: {
                            lights: string;
                            covers: string;
                            climate: string;
                            media_players: string;
                            security: string;
                            actions: string;
                            others: string;
                        };
                        other_areas: string;
                        areas: string;
                    };
                    home: {
                        summary_list: {
                            media_players: string;
                            other_devices: string;
                            weather: string;
                            maintenance: string;
                            energy: string;
                            persons: string;
                        };
                        welcome_user: string;
                        summaries: string;
                        areas: string;
                        other_areas: string;
                        devices: string;
                        unnamed_device: string;
                        others: string;
                        scenes: string;
                        automations: string;
                        for_you: string;
                        home: string;
                        favorites: string;
                        welcome_title: string;
                        welcome_content: string;
                        welcome_add_device: string;
                        welcome_edit_areas: string;
                    };
                    common_controls: {
                        not_loaded: string;
                        no_data: string;
                    };
                    light: {
                        lights: string;
                        other_lights: string;
                        on: string;
                        off: string;
                    };
                    security: {
                        devices: string;
                        other_devices: string;
                        activity: string;
                    };
                    climate: {
                        devices: string;
                        other_devices: string;
                    };
                    maintenance: {
                        devices: string;
                        other_devices: string;
                    };
                    home_media_players: {
                        media_players: string;
                        other_media_players: string;
                    };
                    "home-other-devices": {
                        helpers: string;
                        entities: string;
                        assign_area: string;
                        all_organized_title: string;
                        all_organized_content: string;
                    };
                    "home-area": {
                        no_devices_title: string;
                        no_devices_content: string;
                        no_devices_add_device: string;
                        no_devices_assign_device: string;
                    };
                };
                cards: {
                    confirm_delete: string;
                    show_more_info: string;
                    actions: {
                        action_confirmation: string;
                        no_entity_more_info: string;
                        no_entity_toggle: string;
                        no_navigation_path: string;
                        no_url: string;
                        no_action: string;
                    };
                    entities: {
                        never_triggered: string;
                    };
                    "todo-list": {
                        unchecked_items: string;
                        no_unchecked_items: string;
                        checked_items: string;
                        no_status_items: string;
                        clear_items: string;
                        add_item: string;
                        today: string;
                        reorder_items: string;
                        exit_reorder_items: string;
                        drag_and_drop: string;
                        delete_item: string;
                        delete_confirm_title: string;
                        delete_confirm_text: string;
                    };
                    "picture-elements": {
                        hold: string;
                        tap: string;
                        navigate_to: string;
                        url: string;
                        toggle: string;
                        perform_action: string;
                        more_info: string;
                    };
                    iframe: {
                        error_secure_context: string;
                    };
                    "recovery-mode": {
                        header: string;
                        description: string;
                    };
                    starting: {
                        description: string;
                    };
                    map: {
                        reset_focus: string;
                        toggle_grouping: string;
                    };
                    energy: {
                        loading: string;
                        no_data: string;
                        no_data_period: string;
                        energy_usage_graph: {
                            total_consumed: string;
                            total_returned: string;
                            total_usage: string;
                            combined_from_grid: string;
                            consumed_solar: string;
                            consumed_battery: string;
                            named_battery_charged: string;
                            named_grid_consumed: string;
                            named_grid_exported: string;
                        };
                        energy_sources_table: {
                            grid_total: string;
                            gas_total: string;
                            solar_total: string;
                            water_total: string;
                            source: string;
                            energy: string;
                            cost: string;
                            previous_energy: string;
                            previous_cost: string;
                            battery_total: string;
                            total_costs: string;
                            named_battery_charged: string;
                            named_battery_discharged: string;
                            named_grid_imported: string;
                            named_grid_exported: string;
                        };
                        energy_solar_graph: {
                            production: string;
                            forecast: string;
                            total_produced: string;
                        };
                        energy_gas_graph: {
                            total_consumed: string;
                        };
                        energy_water_graph: {
                            total_consumed: string;
                        };
                        solar_consumed_gauge: {
                            card_indicates_solar_energy_used: string;
                            card_indicates_solar_energy_used_charge_home_bat: string;
                            self_consumed_solar_energy: string;
                            not_produced_solar_energy: string;
                            self_consumed_solar_could_not_calc: string;
                        };
                        self_sufficiency_gauge: {
                            card_indicates_self_sufficiency_quota: string;
                            self_sufficiency_quota: string;
                            self_sufficiency_could_not_calc: string;
                        };
                        grid_neutrality_gauge: {
                            energy_dependency: string;
                            color_explain: string;
                            net_returned_grid: string;
                            net_consumed_grid: string;
                            grid_neutrality_not_calculated: string;
                        };
                        grid_balance: {
                            title: string;
                            imported: string;
                            exported: string;
                            net_import: string;
                            net_export: string;
                        };
                        energy_distribution: {
                            title_today: string;
                            grid: string;
                            gas: string;
                            water: string;
                            solar: string;
                            low_carbon: string;
                            battery: string;
                            go_to_energy_dashboard: string;
                        };
                        energy_devices_graph: {
                            energy_usage: string;
                            previous_energy_usage: string;
                            total_energy_usage: string;
                            change_chart_type: string;
                            untracked_consumption: string;
                            untracked: string;
                        };
                        energy_devices_detail_graph: {
                            untracked_consumption: string;
                            untracked: string;
                            other: string;
                        };
                        carbon_consumed_gauge: {
                            card_indicates_energy_used: string;
                            low_carbon_energy_consumed: string;
                            low_carbon_energy_not_calculated: string;
                        };
                        power_graph: {
                            grid: string;
                            solar: string;
                            battery: string;
                            usage: string;
                        };
                        energy_compare: {
                            info: string;
                            compare_previous_year: string;
                            compare_previous_period: string;
                            compare_preview: string;
                        };
                        power_total_title: string;
                        water_total_title: string;
                        gas_total_title: string;
                    };
                    distribution: {
                        no_entities: string;
                        domain_mismatch: string;
                        device_class_mismatch: string;
                        no_data: string;
                        add_entities: string;
                    };
                    heading: {
                        default_heading: string;
                    };
                };
                unused_entities: {
                    title: string;
                    available_entities: string;
                    select_to_add: string;
                    state_icon: string;
                    entity: string;
                    entity_id: string;
                    domain: string;
                    last_changed: string;
                    search: string;
                    no_data: string;
                };
                add_entities: {
                    yaml_unsupported: string;
                    generated_unsupported: string;
                    saving_failed: string;
                };
                views: {
                    unnamed_view: string;
                    delete_title: string;
                    delete_named_view_only: string;
                    delete_unnamed_view_only: string;
                    delete_named_view_cards: string;
                    delete_unnamed_view_cards: string;
                    delete_named_view_sections: string;
                    delete_unnamed_view_sections: string;
                };
                menu: {
                    configure_ui: string;
                    help: string;
                    search_entities: string;
                    assist: string;
                    assist_tooltip: string;
                    search_home_assistant: string;
                    reload_resources: string;
                    exit_edit_mode: string;
                    close: string;
                    add: string;
                    add_device: string;
                    create_automation: string;
                    create_area: string;
                    create_area_success: string;
                    create_area_action: string;
                    add_person_success: string;
                    add_person_action: string;
                    add_person: string;
                    edit_overview: string;
                    edit_area: string;
                };
                reload_resources: {
                    refresh_header: string;
                    refresh_body: string;
                };
                editor: {
                    header: string;
                    yaml_unsupported: string;
                    undo_redo_failed_to_apply_changes: string;
                    menu: {
                        open: string;
                        raw_editor: string;
                        manage_dashboards: string;
                        manage_resources: string;
                    };
                    common: {
                        edit: string;
                        clear: string;
                        add: string;
                        none: string;
                    };
                    raw_editor: {
                        header: string;
                        save: string;
                        unsaved_changes: string;
                        saved: string;
                        reload: string;
                        confirm_reset_config_title: string;
                        confirm_reset_config_text: string;
                        confirm_unsaved_changes: string;
                        confirm_unsaved_comments: string;
                        error_invalid_config: string;
                        error_save_yaml: string;
                        resources_moved: string;
                    };
                    edit_lovelace: {
                        header: string;
                        explanation: string;
                        edit_title: string;
                        title: string;
                    };
                    edit_view: {
                        header: string;
                        header_name: string;
                        add: string;
                        background: {
                            settings: string;
                            image: string;
                            size: {
                                name: string;
                                options: {
                                    auto: string;
                                    cover: string;
                                    contain: string;
                                };
                            };
                            alignment: {
                                name: string;
                                options: {
                                    "top left": string;
                                    "top center": string;
                                    "top right": string;
                                    "center left": string;
                                    center: string;
                                    "center right": string;
                                    "bottom left": string;
                                    "bottom center": string;
                                    "bottom right": string;
                                };
                            };
                            opacity: string;
                            repeat: {
                                name: string;
                                options: {
                                    repeat: string;
                                    "no-repeat": string;
                                };
                            };
                            attachment: {
                                name: string;
                                options: {
                                    scroll: string;
                                    fixed: string;
                                };
                            };
                        };
                        edit: string;
                        delete: string;
                        move_left: string;
                        move_right: string;
                        tab_settings: string;
                        tab_background: string;
                        tab_visibility: string;
                        visibility: {
                            select_users: string;
                        };
                        type: string;
                        convert_view: string;
                        convert_view_title: string;
                        convert_view_text: string;
                        convert_view_action: string;
                        card_to_section_convert: string;
                        section_to_card_not_supported: string;
                        types: {
                            sections: string;
                            masonry: string;
                            sidebar: string;
                            panel: string;
                        };
                        show_icon_and_title: string;
                        subview: string;
                        max_columns: string;
                        section_specifics: string;
                        dense_section_placement: string;
                        dense_section_placement_helper: string;
                        top_margin: string;
                        top_margin_helper: string;
                        show_icon_and_title_helper: string;
                        subview_helper: string;
                        path_helper: string;
                        edit_ui: string;
                        edit_yaml: string;
                        saving_failed: string;
                        error_same_url: string;
                        error_invalid_path: string;
                        error_number: string;
                        move_to_dashboard: string;
                        move_to_view: string;
                    };
                    edit_view_header: {
                        add_title: string;
                        header: string;
                        edit_ui: string;
                        edit_yaml: string;
                        saving_failed: string;
                        default_title: string;
                        settings: {
                            layout: string;
                            layout_options: {
                                responsive: string;
                                responsive_description: string;
                                start: string;
                                start_description: string;
                                start_rtl: string;
                                center: string;
                                center_description: string;
                            };
                            badges_position: string;
                            badges_position_options: {
                                top: string;
                                bottom: string;
                            };
                            badges_wrap: string;
                            badges_wrap_options: {
                                wrap: string;
                                scroll: string;
                                scroll_description: string;
                            };
                        };
                    };
                    edit_view_footer: {
                        header: string;
                        add: string;
                        edit_ui: string;
                        edit_yaml: string;
                        saving_failed: string;
                        settings: {
                            max_width: string;
                        };
                    };
                    edit_badges: {
                        view_no_badges: string;
                    };
                    edit_card: {
                        header: string;
                        typed_header: string;
                        pick_card: string;
                        pick_card_title: string;
                        toggle_editor: string;
                        unsaved_changes: string;
                        confirm_cancel: string;
                        show_visual_editor: string;
                        show_code_editor: string;
                        edit_ui: string;
                        edit_yaml: string;
                        add: string;
                        edit: string;
                        clear: string;
                        delete: string;
                        copy: string;
                        cut: string;
                        duplicate: string;
                        move: string;
                        move_before: string;
                        move_after: string;
                        change_position: string;
                        decrease_position: string;
                        increase_position: string;
                        options: string;
                        search_cards: string;
                        tab_config: string;
                        tab_visibility: string;
                        tab_layout: string;
                        paste_condition: string;
                        layout: {
                            full_width: string;
                            full_width_helper: string;
                            auto_height: string;
                            auto_height_helper: string;
                            precise_mode: string;
                            precise_mode_helper: string;
                            no_grid_support: string;
                        };
                    };
                    edit_badge: {
                        header: string;
                        typed_header: string;
                        pick_badge: string;
                        pick_badge_title: string;
                        toggle_editor: string;
                        unsaved_changes: string;
                        confirm_cancel: string;
                        show_visual_editor: string;
                        show_code_editor: string;
                        edit_ui: string;
                        edit_yaml: string;
                        add: string;
                        edit: string;
                        clear: string;
                        delete: string;
                        copy: string;
                        cut: string;
                        duplicate: string;
                        tab_config: string;
                        tab_visibility: string;
                    };
                    suggest_badge: {
                        header: string;
                        add: string;
                    };
                    move_section: {
                        header: string;
                        error_title: string;
                        error_text: string;
                        success: string;
                        error: string;
                    };
                    move_card: {
                        header: string;
                        strategy_error_title: string;
                        strategy_error_text_strategy: string;
                        success: string;
                        error: string;
                    };
                    change_position: {
                        title: string;
                        text: string;
                    };
                    select_view: {
                        header: string;
                        dashboard_label: string;
                        views_label: string;
                        no_config: string;
                        no_views: string;
                        strategy_type: string;
                    };
                    select_dashboard: {
                        error_title: string;
                        error_text: string;
                        header: string;
                        cannot_move_to_strategy: string;
                        get_config_failed: string;
                        move_failed: string;
                        revert_failed: string;
                        success: string;
                    };
                    section: {
                        add_badge: string;
                        add_card: string;
                        drop_card_create_section: string;
                        create_section: string;
                        default_section_title: string;
                        imported_cards_title: string;
                        imported_cards_description: string;
                    };
                    delete_section: {
                        title: string;
                        text: string;
                    };
                    edit_section: {
                        header: string;
                        tab_visibility: string;
                        tab_settings: string;
                        edit_ui: string;
                        edit_yaml: string;
                        settings: {
                            column_span: string;
                            column_span_helper: string;
                            background: string;
                            background_enabled: string;
                            background_enabled_helper: string;
                            background_color: string;
                            background_color_default: string;
                            background_opacity: string;
                            theme: string;
                            theme_helper: string;
                        };
                    };
                    suggest_card: {
                        header: string;
                        create_own: string;
                        add: string;
                    };
                    save_config: {
                        header: string;
                        para: string;
                        para_sure: string;
                        yaml_mode: string;
                        yaml_control: string;
                        yaml_config: string;
                        empty_config: string;
                        close: string;
                        save: string;
                    };
                    migrate: {
                        header: string;
                        para_no_id: string;
                        para_migrate: string;
                        migrate: string;
                    };
                    "action-editor": {
                        navigation_path: string;
                        url_path: string;
                        start_listening: string;
                        pipeline_id: string;
                        actions: {
                            default_action: string;
                            "perform-action": string;
                            "more-info": string;
                            toggle: string;
                            navigate: string;
                            assist: string;
                            url: string;
                            none: string;
                        };
                    };
                    "condition-editor": {
                        add: string;
                        test: string;
                        testing_pass: string;
                        testing_error: string;
                        live_test_state: {
                            pass: string;
                            fail: string;
                            invalid: string;
                            unknown: string;
                        };
                        visibility_status: {
                            visible: {
                                headline: string;
                                supporting: string;
                                supporting_empty: string;
                            };
                            hidden: {
                                headline: string;
                                supporting: string;
                            };
                            invalid: {
                                headline: string;
                                supporting: string;
                            };
                        };
                        invalid_config_title: string;
                        invalid_config_text: string;
                        condition: {
                            view_columns: {
                                label: string;
                                min: string;
                                max: string;
                                unit: string;
                            };
                            numeric_state: {
                                label: string;
                                attribute: string;
                                above: string;
                                below: string;
                            };
                            screen: {
                                label: string;
                                breakpoints: string;
                                breakpoints_list: {
                                    mobile: string;
                                    tablet: string;
                                    desktop: string;
                                    wide: string;
                                };
                                min: string;
                            };
                            state: {
                                label: string;
                                attribute: string;
                                current_entity: string;
                                state_equal: string;
                                state_not_equal: string;
                            };
                            time: {
                                label: string;
                                after: string;
                                before: string;
                                weekdays: string;
                            };
                            location: {
                                label: string;
                                locations: string;
                                locations_helper: string;
                            };
                            user: {
                                label: string;
                            };
                            or: {
                                label: string;
                            };
                            not: {
                                label: string;
                            };
                            and: {
                                label: string;
                            };
                        };
                    };
                    "strategy-editor": {
                        header: string;
                        take_control: string;
                        raw_configuration_editor: string;
                        show_code_editor: string;
                        show_visual_editor: string;
                    };
                    card: {
                        "alarm-panel": {
                            name: string;
                            available_states: string;
                            description: string;
                        };
                        area: {
                            name: string;
                            color: string;
                            alert_classes: string;
                            alert_classes_helper: string;
                            sensor_classes: string;
                            sum: string;
                            median: string;
                            description: string;
                            display_type: string;
                            content_layout: string;
                            content_layout_options: {
                                horizontal: string;
                                vertical: string;
                            };
                            display_type_options: {
                                compact: string;
                                icon: string;
                                picture: string;
                                camera: string;
                            };
                            image_tap_action: string;
                        };
                        calendar: {
                            name: string;
                            description: string;
                            initial_view: string;
                            calendar_entities: string;
                            views: {
                                dayGridMonth: string;
                                dayGridWeek: string;
                                dayGridDay: string;
                                listWeek: string;
                            };
                        };
                        conditional: {
                            name: string;
                            description: string;
                            conditions: string;
                            card: string;
                            change_type: string;
                        };
                        config: {
                            required: string;
                            optional: string;
                        };
                        entities: {
                            name: string;
                            show_header_toggle: string;
                            toggle: string;
                            description: string;
                            special_row: string;
                            edit_special_row: string;
                            entity_row_editor: string;
                            secondary_info_values: {
                                none: string;
                                "entity-id": string;
                                "last-changed": string;
                                "last-triggered": string;
                                position: string;
                                "tilt-position": string;
                                brightness: string;
                                "last-updated": string;
                                state: string;
                                area: string;
                            };
                            entity_row: {
                                divider: string;
                                "call-service": string;
                                "perform-action": string;
                                section: string;
                                weblink: string;
                                attribute: string;
                                buttons: string;
                                conditional: string;
                                cast: string;
                                button: string;
                            };
                        };
                        entity: {
                            name: string;
                            description: string;
                        };
                        empty_state: {
                            name: string;
                            description: string;
                            style: string;
                            style_options: {
                                card: string;
                                "content-only": string;
                            };
                            content: string;
                            buttons: string;
                        };
                        button: {
                            name: string;
                            description: string;
                            default_action_help: string;
                        };
                        "entity-filter": {
                            name: string;
                            description: string;
                        };
                        "entity-row": {
                            secondary_info: string;
                        };
                        gauge: {
                            name: string;
                            needle_gauge: string;
                            severity: {
                                define: string;
                                green: string;
                                red: string;
                                yellow: string;
                            };
                            description: string;
                        };
                        glance: {
                            name: string;
                            columns: string;
                            description: string;
                        };
                        grid: {
                            name: string;
                            description: string;
                            title: string;
                            columns: string;
                            square: string;
                        };
                        logbook: {
                            name: string;
                            description: string;
                            state_filter: string;
                        };
                        "history-graph": {
                            name: string;
                            description: string;
                            show_names: string;
                            logarithmic_scale: string;
                            expand_legend: string;
                            min_y_axis: string;
                            max_y_axis: string;
                            fit_y_data: string;
                        };
                        "energy-date-selection": {
                            name: string;
                            description: string;
                            disable_compare: string;
                            vertical_opening_direction: string;
                            vertical_opening_directions: {
                                auto: string;
                                up: string;
                                down: string;
                            };
                            opening_direction: string;
                            opening_directions: {
                                auto: string;
                                right: string;
                                left: string;
                                center: string;
                            };
                        };
                        "energy-distribution": {
                            name: string;
                            description: string;
                            link_dashboard: string;
                        };
                        "energy-usage-graph": {
                            name: string;
                            description: string;
                        };
                        "energy-solar-graph": {
                            name: string;
                            description: string;
                        };
                        "energy-gas-graph": {
                            name: string;
                            description: string;
                        };
                        "energy-water-graph": {
                            name: string;
                            description: string;
                        };
                        "power-sources-graph": {
                            name: string;
                            description: string;
                            show_legend: string;
                        };
                        "energy-devices-graph": {
                            name: string;
                            description: string;
                            max_devices: string;
                            hide_compound_stats: string;
                            modes: string;
                            mode_options: {
                                bar: string;
                                pie: string;
                            };
                        };
                        "energy-sources-table": {
                            name: string;
                            description: string;
                            show_only_totals: string;
                            types: string;
                            type_options: {
                                grid: string;
                                solar: string;
                                battery: string;
                                gas: string;
                                water: string;
                            };
                        };
                        "energy-compare": {
                            name: string;
                            description: string;
                        };
                        "energy-devices-detail-graph": {
                            name: string;
                            description: string;
                        };
                        "energy-sankey": {
                            name: string;
                            description: string;
                            group_by_floor: string;
                            group_by_area: string;
                            layout: string;
                            layout_directions: {
                                auto: string;
                                vertical: string;
                                horizontal: string;
                            };
                        };
                        "power-sankey": {
                            name: string;
                            description: string;
                        };
                        "water-sankey": {
                            name: string;
                            description: string;
                        };
                        "water-flow-sankey": {
                            name: string;
                            description: string;
                        };
                        "energy-solar-consumed-gauge": {
                            name: string;
                            description: string;
                        };
                        "energy-self-sufficiency-gauge": {
                            name: string;
                            description: string;
                        };
                        "energy-grid-balance": {
                            name: string;
                            description: string;
                        };
                        "energy-grid-neutrality-gauge": {
                            name: string;
                            description: string;
                        };
                        "energy-carbon-consumed-gauge": {
                            name: string;
                            description: string;
                        };
                        "statistics-graph": {
                            name: string;
                            description: string;
                            period: string;
                            unit: string;
                            stat_types: string;
                            stat_type_labels: {
                                mean: string;
                                min: string;
                                max: string;
                                state: string;
                                sum: string;
                                change: string;
                            };
                            chart_type: string;
                            chart_type_labels: {
                                line: string;
                                "line-stack": string;
                                bar: string;
                                "bar-stack": string;
                            };
                            periods: {
                                auto: string;
                                "5minute": string;
                                hour: string;
                                day: string;
                                week: string;
                                month: string;
                                year: string;
                            };
                            pick_statistic: string;
                            picked_statistic: string;
                            hide_legend: string;
                            expand_legend: string;
                            logarithmic_scale: string;
                            min_y_axis: string;
                            max_y_axis: string;
                            fit_y_data: string;
                        };
                        statistic: {
                            name: string;
                            description: string;
                            period: string;
                            stat_types: string;
                            stat_type_labels: {
                                mean: string;
                                min: string;
                                max: string;
                                change: string;
                            };
                            periods: {
                                today: string;
                                yesterday: string;
                                this_week: string;
                                last_week: string;
                                this_month: string;
                                last_month: string;
                                this_year: string;
                                last_year: string;
                            };
                        };
                        "horizontal-stack": {
                            name: string;
                            title: string;
                            description: string;
                        };
                        distribution: {
                            name: string;
                            description: string;
                        };
                        humidifier: {
                            name: string;
                            description: string;
                            show_current_as_primary: string;
                        };
                        iframe: {
                            name: string;
                            description: string;
                            hide_background: string;
                            hide_background_helper: string;
                        };
                        light: {
                            name: string;
                            description: string;
                        };
                        generic: {
                            alt_text: string;
                            aspect_ratio: string;
                            aspect_ratio_ignored: string;
                            attribute: string;
                            camera_image: string;
                            image_entity: string;
                            show_entity_picture: string;
                            show_entity_picture_helper: string;
                            camera_view: string;
                            camera_view_options: {
                                auto: string;
                                live: string;
                            };
                            energy_date_selection: string;
                            collection_key: string;
                            collection_key_description: string;
                            double_tap_action: string;
                            entities: string;
                            entity: string;
                            fit_mode: string;
                            fit_mode_options: {
                                contain: string;
                                cover: string;
                                fill: string;
                            };
                            hold_action: string;
                            hours_to_show: string;
                            days_to_show: string;
                            icon: string;
                            color: string;
                            icon_height: string;
                            image: string;
                            label_mode: string;
                            maximum: string;
                            manual: string;
                            manual_description: string;
                            minimum: string;
                            name: string;
                            paste: string;
                            paste_description: string;
                            refresh_interval: string;
                            show_icon: string;
                            show_name: string;
                            show_state: string;
                            show_last_changed: string;
                            tap_action: string;
                            interactions: string;
                            title: string;
                            theme: string;
                            unit: string;
                            url: string;
                            state: string;
                            secondary_info_attribute: string;
                            search: string;
                            state_color: string;
                            suggested_cards: string;
                            core_cards: string;
                            energy_cards: string;
                            custom_cards: string;
                            round_temperature: string;
                            features: string;
                            actions: string;
                            content: string;
                        };
                        heading: {
                            name: string;
                            description: string;
                            heading: string;
                            heading_style: string;
                            heading_style_options: {
                                title: string;
                                subtitle: string;
                            };
                            badges: string;
                            entity_config: {
                                color: string;
                                color_helper: string;
                                name: string;
                                name_helper: string;
                                visibility: string;
                                visibility_explanation: string;
                                state_content: string;
                                displayed_elements: string;
                                displayed_elements_options: {
                                    icon: string;
                                    state: string;
                                };
                            };
                            button_config: {
                                text: string;
                                color: string;
                                visibility: string;
                                visibility_explanation: string;
                            };
                            default_heading: string;
                        };
                        shortcut: {
                            name: string;
                            description: string;
                            label: string;
                            card_description: string;
                            text: string;
                            content_layout: string;
                            additional_interactions: string;
                        };
                        map: {
                            name: string;
                            geo_location_sources: string;
                            no_geo_location_sources: string;
                            focus: string;
                            focus_helper: string;
                            appearance: string;
                            theme_mode: string;
                            theme_modes: {
                                auto: string;
                                light: string;
                                dark: string;
                            };
                            default_zoom: string;
                            auto_fit: string;
                            fit_zones: string;
                            cluster: string;
                            show_all: string;
                            show_all_helper: string;
                            source: string;
                            label_modes: {
                                name: string;
                                icon: string;
                                state: string;
                                attribute: string;
                            };
                            conditions: string;
                            conditions_helper: string;
                            description: string;
                        };
                        markdown: {
                            name: string;
                            content: string;
                            style: string;
                            style_options: {
                                card: string;
                                "text-only": string;
                            };
                            actions_warning: string;
                            description: string;
                        };
                        clock: {
                            name: string;
                            description: string;
                            clock_style: string;
                            clock_styles: {
                                digital: string;
                                analog: string;
                            };
                            clock_size: string;
                            clock_sizes: {
                                small: string;
                                medium: string;
                                large: string;
                            };
                            show_seconds: string;
                            time_format: string;
                            time_formats: {
                                auto: string;
                                language: string;
                                system: string;
                                "24": string;
                                "12": string;
                            };
                            time_zone: string;
                            time_zones: {
                                auto: string;
                            };
                            no_background: string;
                            border: {
                                label: string;
                                description: string;
                            };
                            ticks: {
                                label: string;
                                description: string;
                                none: {
                                    label: string;
                                    description: string;
                                };
                                quarter: {
                                    label: string;
                                    description: string;
                                };
                                hour: {
                                    label: string;
                                    description: string;
                                };
                                minute: {
                                    label: string;
                                    description: string;
                                };
                            };
                            seconds_motion: {
                                label: string;
                                description: string;
                                continuous: {
                                    label: string;
                                    description: string;
                                };
                                tick: {
                                    label: string;
                                    description: string;
                                };
                            };
                            face_style: {
                                label: string;
                                description: string;
                                markers: {
                                    label: string;
                                    description: string;
                                };
                                numbers_upright: {
                                    label: string;
                                    description: string;
                                };
                                roman: {
                                    label: string;
                                    description: string;
                                };
                            };
                        };
                        "media-control": {
                            name: string;
                            description: string;
                        };
                        picture: {
                            name: string;
                            description: string;
                            content_id_helper: string;
                        };
                        "picture-elements": {
                            name: string;
                            description: string;
                            card_options: string;
                            elements: string;
                            new_element: string;
                            confirm_delete_element: string;
                            dark_mode_image: string;
                            state_filter: string;
                            dark_mode_filter: string;
                            position_hint: string;
                            element_types: {
                                "state-badge": string;
                                "state-icon": string;
                                "state-label": string;
                                "service-button": string;
                                "action-button": string;
                                icon: string;
                                image: string;
                                conditional: string;
                            };
                        };
                        "picture-entity": {
                            name: string;
                            description: string;
                        };
                        "picture-glance": {
                            name: string;
                            description: string;
                            state_entity: string;
                        };
                        "plant-status": {
                            name: string;
                            description: string;
                        };
                        sensor: {
                            name: string;
                            show_more_detail: string;
                            graph_type: string;
                            graph_options: {
                                none: string;
                                line: string;
                            };
                            description: string;
                            limit_min: string;
                            limit_max: string;
                        };
                        "todo-list": {
                            name: string;
                            description: string;
                            integration_not_loaded: string;
                            hide_completed: string;
                            hide_create: string;
                            hide_section_headers: string;
                            hide_section_headers_helper: string;
                            display_order: string;
                            due_date_period: string;
                            due_date_period_helper: string;
                            item_tap_action: string;
                            actions: {
                                edit: string;
                                toggle: string;
                            };
                            sort_modes: {
                                none: string;
                                manual: string;
                                alpha_asc: string;
                                alpha_desc: string;
                                duedate_asc: string;
                                duedate_desc: string;
                            };
                        };
                        thermostat: {
                            name: string;
                            description: string;
                            show_current_as_primary: string;
                        };
                        tile: {
                            name: string;
                            description: string;
                            color: string;
                            color_helper: string;
                            icon_tap_action: string;
                            icon_hold_action: string;
                            icon_double_tap_action: string;
                            show_entity_picture: string;
                            hide_state: string;
                            state_content: string;
                            features_position: string;
                            features_position_options: {
                                bottom: string;
                                bottom_description: string;
                                inline: string;
                                inline_description: string;
                            };
                            features_position_helper_vertical: string;
                            content_layout: string;
                            content_layout_options: {
                                horizontal: string;
                                vertical: string;
                            };
                        };
                        "vertical-stack": {
                            name: string;
                            title: string;
                            description: string;
                        };
                        "weather-forecast": {
                            name: string;
                            description: string;
                            weather_to_show: string;
                            show_both: string;
                            show_only_current: string;
                            show_only_forecast: string;
                            forecast_type: string;
                            forecast_slots: string;
                            no_type: string;
                            daily: string;
                            hourly: string;
                            twice_daily: string;
                        };
                    };
                    elements: {
                        style: string;
                        prefix: string;
                        suffix: string;
                        state_image: string;
                        filter: string;
                        state_filter: string;
                    };
                    badge: {
                        entity: {
                            name: string;
                            description: string;
                            color: string;
                            color_helper: string;
                            show_entity_picture: string;
                            state_content: string;
                            displayed_elements: string;
                            displayed_elements_options: {
                                icon: string;
                                name: string;
                                state: string;
                            };
                        };
                        shortcut: {
                            name: string;
                            description: string;
                        };
                        generic: {
                            manual: string;
                            manual_description: string;
                            paste: string;
                            paste_description: string;
                            suggested_badges: string;
                            other_badges: string;
                            custom_badges: string;
                        };
                    };
                    entities: {
                        name: string;
                        add: string;
                        edit: string;
                        remove: string;
                        "form-label": string;
                    };
                    badges: {
                        name: string;
                        edit: string;
                        remove: string;
                    };
                    features: {
                        name: string;
                        not_compatible: string;
                        no_compatible_available: string;
                        add: string;
                        edit: string;
                        remove: string;
                        types: {
                            button: {
                                label: string;
                            };
                            "cover-open-close": {
                                label: string;
                            };
                            "cover-position": {
                                label: string;
                            };
                            "cover-position-favorite": {
                                label: string;
                                description: string;
                            };
                            "cover-tilt": {
                                label: string;
                            };
                            "cover-tilt-favorite": {
                                label: string;
                                description: string;
                            };
                            "cover-tilt-position": {
                                label: string;
                            };
                            "date-set": {
                                label: string;
                            };
                            "fan-oscillate": {
                                label: string;
                            };
                            "fan-direction": {
                                label: string;
                            };
                            "fan-speed": {
                                label: string;
                            };
                            "alarm-modes": {
                                label: string;
                                modes: string;
                                modes_list: {
                                    armed_away: string;
                                    armed_home: string;
                                    armed_night: string;
                                    armed_vacation: string;
                                    armed_custom_bypass: string;
                                    disarmed: string;
                                };
                                customize_modes: string;
                            };
                            "light-brightness": {
                                label: string;
                            };
                            "light-color-favorites": {
                                label: string;
                                description: string;
                            };
                            "light-color-temp": {
                                label: string;
                            };
                            "lock-commands": {
                                label: string;
                            };
                            "lock-open-door": {
                                label: string;
                            };
                            "media-player-playback": {
                                label: string;
                                controls: string;
                            };
                            "media-player-sound-mode": {
                                label: string;
                                sound_modes: string;
                                customize: string;
                            };
                            "media-player-source": {
                                label: string;
                                sources: string;
                                customize: string;
                            };
                            "media-player-volume-buttons": {
                                label: string;
                                step: string;
                                show_mute_button: string;
                            };
                            "media-player-volume-slider": {
                                label: string;
                                show_mute_button: string;
                            };
                            "vacuum-commands": {
                                label: string;
                                customize: string;
                                commands: string;
                                commands_list: {
                                    start_pause: string;
                                    stop: string;
                                    clean_spot: string;
                                    locate: string;
                                    return_home: string;
                                };
                            };
                            "valve-open-close": {
                                label: string;
                            };
                            "valve-position-favorite": {
                                label: string;
                                description: string;
                            };
                            "valve-position": {
                                label: string;
                            };
                            "climate-fan-modes": {
                                label: string;
                                style: string;
                                style_list: {
                                    dropdown: string;
                                    icons: string;
                                };
                                customize_modes: string;
                                fan_modes: string;
                            };
                            "climate-swing-modes": {
                                label: string;
                                swing_modes: string;
                                style: string;
                                style_list: {
                                    dropdown: string;
                                    icons: string;
                                };
                                customize_modes: string;
                            };
                            "climate-swing-horizontal-modes": {
                                label: string;
                                swing_horizontal_modes: string;
                                style: string;
                                style_list: {
                                    dropdown: string;
                                    icons: string;
                                };
                                customize_modes: string;
                            };
                            "climate-hvac-modes": {
                                label: string;
                                hvac_modes: string;
                                style: string;
                                style_list: {
                                    dropdown: string;
                                    icons: string;
                                };
                                customize_modes: string;
                            };
                            "climate-preset-modes": {
                                label: string;
                                style: string;
                                style_list: {
                                    dropdown: string;
                                    icons: string;
                                };
                                customize_modes: string;
                                preset_modes: string;
                            };
                            "counter-actions": {
                                label: string;
                                customize: string;
                                actions: string;
                                actions_list: {
                                    increment: string;
                                    decrement: string;
                                    reset: string;
                                };
                            };
                            "fan-preset-modes": {
                                label: string;
                                style: string;
                                style_list: {
                                    dropdown: string;
                                    icons: string;
                                };
                                customize_modes: string;
                                preset_modes: string;
                            };
                            "humidifier-toggle": {
                                label: string;
                            };
                            "humidifier-modes": {
                                label: string;
                                style: string;
                                style_list: {
                                    dropdown: string;
                                    icons: string;
                                };
                                customize_modes: string;
                                modes: string;
                            };
                            "select-options": {
                                label: string;
                                options: string;
                                customize_options: string;
                            };
                            toggle: {
                                label: string;
                            };
                            "numeric-input": {
                                label: string;
                                style: string;
                                style_list: {
                                    buttons: string;
                                    slider: string;
                                };
                            };
                            "target-temperature": {
                                label: string;
                            };
                            "target-humidity": {
                                label: string;
                            };
                            "water-heater-operation-modes": {
                                label: string;
                                operation_modes: string;
                                customize_modes: string;
                                style: string;
                                style_list: {
                                    dropdown: string;
                                    icons: string;
                                };
                            };
                            "lawn-mower-commands": {
                                label: string;
                                customize: string;
                                commands: string;
                                commands_list: {
                                    start_pause: string;
                                    dock: string;
                                };
                            };
                            "update-actions": {
                                label: string;
                                backup: string;
                                backup_options: {
                                    yes: string;
                                    no: string;
                                    ask: string;
                                };
                                backup_not_supported: string;
                            };
                            "area-controls": {
                                label: string;
                                customize_controls: string;
                                controls: string;
                                sections: {
                                    domain: string;
                                    entity: string;
                                };
                                controls_options: {
                                    light: string;
                                    fan: string;
                                    switch: string;
                                    "cover-awning": string;
                                    "cover-blind": string;
                                    "cover-curtain": string;
                                    "cover-damper": string;
                                    "cover-door": string;
                                    "cover-garage": string;
                                    "cover-gate": string;
                                    "cover-shade": string;
                                    "cover-shutter": string;
                                    "cover-window": string;
                                };
                                no_compatible_controls: string;
                            };
                            "bar-gauge": {
                                label: string;
                                min: string;
                                max: string;
                            };
                            "trend-graph": {
                                label: string;
                                detail: string;
                            };
                            "temperature-forecast": {
                                label: string;
                                no_forecast: string;
                                failed_to_load: string;
                                forecast_type: string;
                                forecast_type_options: {
                                    daily: string;
                                    twice_daily: string;
                                    hourly: string;
                                };
                                color: string;
                                show_labels: string;
                            };
                            "precipitation-forecast": {
                                label: string;
                                no_forecast: string;
                                failed_to_load: string;
                                forecast_type: string;
                                forecast_type_options: {
                                    daily: string;
                                    twice_daily: string;
                                    hourly: string;
                                };
                                precipitation_type: string;
                                precipitation_type_options: {
                                    amount: string;
                                    probability: string;
                                };
                                color: string;
                                show_labels: string;
                            };
                        };
                    };
                    "heading-badges": {
                        add: string;
                        no_entity: string;
                        entity_not_found: string;
                        types: {
                            entity: {
                                label: string;
                            };
                            button: {
                                label: string;
                            };
                        };
                    };
                    strategy: {
                        "original-states": {
                            areas: string;
                            hide_entities_without_area: string;
                            hide_energy: string;
                        };
                        iframe: {
                            url: string;
                        };
                        areas: {
                            areas_display: string;
                            no_entities: string;
                            use_compact_card: string;
                            use_large_card: string;
                        };
                        home: {
                            favorite_entities: string;
                            add_favorite_entity: string;
                        };
                    };
                    view: {
                        panel_mode: {
                            warning_multiple_cards: string;
                        };
                    };
                    cardpicker: {
                        no_description: string;
                        domain: string;
                        entity: string;
                        by_entity: string;
                        by_card: string;
                        search_entities: string;
                        home: string;
                        unassigned: string;
                        other_areas: string;
                        entities: string;
                        helpers: string;
                        devices: string;
                        services: string;
                        browse_cards: string;
                        more_cards: string;
                        content_empty_title: string;
                        content_empty_description: string;
                        no_search_results_title: string;
                        no_search_results_description: string;
                        selected_entity: string;
                        suggestions_title: string;
                        community_title: string;
                        not_found: string;
                        suggestions: {
                            periods: {
                                last_24h: string;
                                last_7d: string;
                                last_30d: string;
                                last_year: string;
                            };
                        };
                    };
                    badge_picker: {
                        no_description: string;
                        custom_badge: string;
                        domain: string;
                        entity: string;
                        by_entity: string;
                        by_badge: string;
                    };
                    "header-footer": {
                        header: string;
                        footer: string;
                        choose_header_footer: string;
                        types: {
                            graph: {
                                name: string;
                            };
                            picture: {
                                name: string;
                            };
                            buttons: {
                                name: string;
                            };
                        };
                    };
                    "sub-element-editor": {
                        types: {
                            header: string;
                            footer: string;
                            row: string;
                            feature: string;
                            element: string;
                            "heading-badge": string;
                            element_type: string;
                        };
                    };
                };
                warning: {
                    attribute_not_found: string;
                    attribute_not_numeric: string;
                    entity_not_found: string;
                    entity_non_numeric: string;
                    entity_unavailable: string;
                    starting: string;
                };
                externally_updated_toast: {
                    message: string;
                };
                components: {
                    "timestamp-display": {
                        invalid: string;
                        invalid_format: string;
                    };
                    energy_period_selector: {
                        now: string;
                        previous: string;
                        next: string;
                        compare: string;
                        download_data: string;
                    };
                };
                reload_lovelace: string;
            };
            "media-browser": {
                error: {
                    player_not_exist: string;
                };
            };
            map: {
                edit_zones: string;
            };
            notfound: {
                no_access_title: string;
                no_access_content: string;
                no_access_go_to_profile: string;
            };
            profile: {
                tabs: {
                    general: string;
                    security: string;
                };
                current_user: string;
                is_owner: string;
                user_preferences_header: string;
                user_preferences_detail: string;
                localization_header: string;
                localization_detail: string;
                mobile_app_settings: string;
                browser_settings: string;
                client_settings_detail: string;
                logout: string;
                logout_title: string;
                logout_text: string;
                force_narrow: {
                    header: string;
                    description: string;
                };
                customize_sidebar: {
                    header: string;
                    description: string;
                    button: string;
                };
                vibrate: {
                    header: string;
                    description: string;
                };
                enable_shortcuts: {
                    header: string;
                    description: string;
                };
                suspend: {
                    header: string;
                    description: string;
                };
                push_notifications: {
                    header: string;
                    description: string;
                    error_load_platform: string;
                    error_use_https: string;
                    push_notifications: string;
                    link_promo: string;
                    add_device_prompt: {
                        title: string;
                        input_label: string;
                    };
                };
                language: {
                    header: string;
                    link_promo: string;
                    dropdown_label: string;
                };
                number_format: {
                    header: string;
                    dropdown_label: string;
                    description: string;
                    formats: {
                        language: string;
                        system: string;
                        comma_decimal: string;
                        decimal_comma: string;
                        quote_decimal: string;
                        space_comma: string;
                        none: string;
                    };
                };
                time_format: {
                    header: string;
                    dropdown_label: string;
                    description: string;
                    formats: {
                        language: string;
                        system: string;
                        "12": string;
                        "24": string;
                    };
                };
                time_zone: {
                    header: string;
                    dropdown_label: string;
                    description: string;
                    options: {
                        local: string;
                        server: string;
                    };
                };
                date_format: {
                    header: string;
                    dropdown_label: string;
                    description: string;
                    formats: {
                        language: string;
                        system: string;
                        DMY: string;
                        MDY: string;
                        YMD: string;
                    };
                };
                first_weekday: {
                    header: string;
                    dropdown_label: string;
                    description: string;
                    values: {
                        language: string;
                        monday: string;
                        tuesday: string;
                        wednesday: string;
                        thursday: string;
                        friday: string;
                        saturday: string;
                        sunday: string;
                    };
                };
                themes: {
                    header: string;
                    error_no_theme: string;
                    link_promo: string;
                    dropdown_label: string;
                    migrate_header: string;
                    migrate_description: string;
                    migrate_button: string;
                    migrate_success: string;
                    migrate_failed: string;
                    theme_mode: string;
                    dark_mode: {
                        auto: string;
                        light: string;
                        dark: string;
                    };
                    primary_color: string;
                    accent_color: string;
                    reset: string;
                    use_default: string;
                };
                dashboard: {
                    header: string;
                    description: string;
                    dropdown_label: string;
                    lovelace: string;
                    home: string;
                    system: string;
                };
                change_password: {
                    header: string;
                    current_password: string;
                    new_password: string;
                    confirm_new_password: string;
                    error_required: string;
                    submit: string;
                    error_new_mismatch: string;
                    error_new_is_old: string;
                    success: string;
                    logout_all_sessions: string;
                    logout_all_sessions_text: string;
                    delete_failed: string;
                };
                mfa: {
                    header: string;
                    disable: string;
                    enable: string;
                    confirm_disable: string;
                };
                mfa_setup: {
                    title_aborted: string;
                    title_success: string;
                    step_done: string;
                    close: string;
                    submit: string;
                };
                entity_id_picker: {
                    title: string;
                    description: string;
                };
                refresh_tokens: {
                    header: string;
                    description: string;
                    ios_app: string;
                    android_app: string;
                    current_session: string;
                    created_at: string;
                    last_used: string;
                    not_used: string;
                    expires_in: string;
                    never_expires: string;
                    disable_token_expiration: string;
                    enable_token_expiration: string;
                    confirm_disable_token_expiration_title: string;
                    confirm_disable_token_expiration_text: string;
                    disable_expiration_failed: string;
                    enable_expiration_failed: string;
                    confirm_delete_title: string;
                    confirm_delete_text: string;
                    delete_all_tokens: string;
                    confirm_delete_all_title: string;
                    confirm_delete_all: string;
                    delete_failed: string;
                    current_token_tooltip: string;
                };
                long_lived_access_tokens: {
                    header: string;
                    description: string;
                    learn_auth_requests: string;
                    created: string;
                    confirm_delete_title: string;
                    confirm_delete_text: string;
                    delete_failed: string;
                    create: string;
                    created_title: string;
                    create_failed: string;
                    name: string;
                    name_exists: string;
                    prompt_name: string;
                    prompt_copy_token: string;
                    empty_state: string;
                    qr_code_image: string;
                    generate_qr_code: string;
                };
            };
            todo: {
                assist: string;
                create_list: string;
                delete_list: string;
                add_item: string;
                information: string;
                delete_confirm_title: string;
                delete_confirm_text: string;
                restart_confirm: string;
            };
            "page-authorize": {
                initializing: string;
                authorizing: string;
                authorizing_app: string;
                authorizing_client: string;
                pick_auth_provider: string;
                abort_intro: string;
                store_token: string;
                help: string;
                welcome_home: string;
                just_checking: string;
                who_is_logging_in: string;
                other_options: string;
                forgot_password: string;
                form: {
                    working: string;
                    unknown_error: string;
                    next: string;
                    previous: string;
                    start_over: string;
                    error: string;
                    error_required: string;
                    hide_password: string;
                    show_password: string;
                    providers: {
                        command_line: {
                            step: {
                                init: {
                                    data: {
                                        username: string;
                                        password: string;
                                    };
                                };
                                mfa: {
                                    data: {
                                        code: string;
                                    };
                                    description: string;
                                };
                            };
                            error: {
                                invalid_auth: string;
                                invalid_code: string;
                            };
                            abort: {
                                login_expired: string;
                            };
                        };
                        homeassistant: {
                            step: {
                                init: {
                                    data: {
                                        username: string;
                                        password: string;
                                    };
                                };
                                mfa: {
                                    data: {
                                        code: string;
                                    };
                                    description: string;
                                };
                            };
                            error: {
                                invalid_auth: string;
                                invalid_code: string;
                            };
                            abort: {
                                login_expired: string;
                            };
                        };
                        legacy_api_password: {
                            step: {
                                init: {
                                    data: {
                                        password: string;
                                    };
                                    description: string;
                                };
                                mfa: {
                                    data: {
                                        code: string;
                                    };
                                    description: string;
                                };
                            };
                            error: {
                                invalid_auth: string;
                                invalid_code: string;
                            };
                            abort: {
                                no_api_password_set: string;
                                login_expired: string;
                            };
                        };
                        trusted_networks: {
                            step: {
                                init: {
                                    data: {
                                        user: string;
                                    };
                                    description: string;
                                };
                            };
                            abort: {
                                not_allowed: string;
                            };
                        };
                    };
                };
            };
            "page-demo": {
                cards: {
                    demo: {
                        demo_by: string;
                        next_demo: string;
                        introduction: string;
                        learn_more: string;
                    };
                };
                config: {
                    arsaboo: {
                        names: {
                            upstairs: string;
                            family_room: string;
                            kitchen: string;
                            patio: string;
                            hallway: string;
                            master_bedroom: string;
                            left: string;
                            right: string;
                            mirror: string;
                            temperature_study: string;
                        };
                        labels: {
                            lights: string;
                            information: string;
                            morning_commute: string;
                            commute_home: string;
                            entertainment: string;
                            activity: string;
                            hdmi_input: string;
                            hdmi_switcher: string;
                            volume: string;
                            total_tv_time: string;
                            turn_tv_off: string;
                            air: string;
                        };
                        unit: {
                            watching: string;
                            minutes_abbr: string;
                        };
                    };
                    sections: {
                        titles: {
                            welcome: string;
                            living_room: string;
                            study: string;
                            kitchen: string;
                            outdoor: string;
                            energy: string;
                            climate: string;
                            updates: string;
                        };
                        entities: {
                            media_player: {
                                living_room_nest_mini: string;
                                kitchen_nest_audio: string;
                                study_nest_hub: string;
                            };
                        };
                    };
                };
            };
            "page-onboarding": {
                intro: string;
                back: string;
                next: string;
                finish: string;
                help: string;
                welcome: {
                    header: string;
                    start: string;
                    or_restore: string;
                    vision: string;
                    community: string;
                    download_app: string;
                    forums: string;
                    open_home_newsletter: string;
                    discord: string;
                    social_media: string;
                    playstore: string;
                    appstore: string;
                };
                user: {
                    header: string;
                    intro: string;
                    required_field: string;
                    data: {
                        name: string;
                        username: string;
                        password: string;
                        password_confirm: string;
                    };
                    helper: {
                        password: string;
                    };
                    create_account: string;
                    error: {
                        username_not_normalized: string;
                        password_not_match: string;
                    };
                };
                "core-config": {
                    location_header: string;
                    intro_location: string;
                    location_address: string;
                    osm_privacy_policy: string;
                    title_location_detect: string;
                    intro_location_detect: string;
                    country_intro: string;
                    location_name: string;
                    location_name_default: string;
                    address_label: string;
                    button_detect: string;
                    finish: string;
                };
                integration: {
                    header: string;
                    intro: string;
                    more_integrations: string;
                    finish: string;
                    all_set: string;
                    lets_start: string;
                };
                analytics: {
                    header: string;
                    finish: string;
                    preferences: {
                        base: {
                            title: string;
                            description: string;
                        };
                        usage: {
                            title: string;
                            description: string;
                        };
                        statistics: {
                            title: string;
                            description: string;
                        };
                        diagnostics: {
                            title: string;
                            description: string;
                        };
                    };
                    need_base_enabled: string;
                    learn_more: string;
                    intro: string;
                };
                restore: {
                    header: string;
                    upload_backup: string;
                    upload_backup_subtitle: string;
                    unsupported: {
                        title: string;
                        text: string;
                    };
                    ok: string;
                    upload_input_label: string;
                    upload_supports_tar: string;
                    upload_secondary: string;
                    delete: string;
                    uploading: string;
                    details: {
                        home_assistant_missing: string;
                        apps_unsupported: string;
                        summary: {
                            created: string;
                            content: string;
                        };
                        restore: {
                            title: string;
                            action: string;
                            encryption: {
                                label: string;
                                description: string;
                                description_cloud: string;
                                incorrect_key: string;
                                input_label: string;
                            };
                        };
                    };
                    data_picker: {
                        settings: string;
                        settings_and_history: string;
                        media: string;
                        share_folder: string;
                        local_apps: string;
                        apps: string;
                        ssl: string;
                    };
                    restore_no_home_assistant: string;
                    in_progress: string;
                    in_progress_description: string;
                    failed: string;
                    failed_status_description: string;
                    failed_description: string;
                    failed_wrong_password_description: string;
                    upload_supports: string;
                    upload_drop: string;
                    show_log: string;
                    hide_log: string;
                    full_backup: string;
                    partial_backup: string;
                    name: string;
                    select_type: string;
                    folders: string;
                    apps: string;
                    password_protection: string;
                    password: string;
                    confirm_password: string;
                    confirm_restore_partial_backup_title: string;
                    confirm_restore_partial_backup_text: string;
                    confirm_restore_full_backup_title: string;
                    confirm_restore_full_backup_text: string;
                    restore: string;
                    close: string;
                    cancel: string;
                    retry: string;
                    back: string;
                    restore_start_failed: string;
                    no_backup_found: string;
                    unnamed_backup: string;
                    cancel_restore: {
                        title: string;
                        text: string;
                        yes: string;
                        no: string;
                    };
                    "ha-cloud": {
                        description: string;
                        no_cloud_backup: string;
                        no_cloud_backup_description: string;
                        sign_out: string;
                        sign_out_progress: string;
                        sign_out_success: string;
                        sign_out_error: string;
                        learn_more: string;
                        sign_in_description: string;
                        login: {
                            title: string;
                            sign_in: string;
                            email: string;
                            email_error_msg: string;
                            password: string;
                            password_error_msg: string;
                            totp_code_prompt_title: string;
                            totp_code: string;
                            cancel: string;
                            submit: string;
                            forgot_password: string;
                            start_trial: string;
                            trial_info: string;
                            alert_password_change_required: string;
                            alert_email_confirm_necessary: string;
                            alert_mfa_code_required: string;
                            alert_mfa_expired_or_not_started: string;
                            alert_totp_code_invalid: string;
                        };
                        forgot_password: {
                            title: string;
                            subtitle: string;
                            instructions: string;
                            email: string;
                            email_error_msg: string;
                            send_reset_email: string;
                            check_your_email: string;
                        };
                    };
                    options: {
                        title: string;
                        upload_description: string;
                    };
                };
            };
            custom: {
                external_panel: {
                    question_trust: string;
                    complete_access: string;
                    hide_message: string;
                };
            };
            energy: {
                error_loading_preferences: string;
                title: {
                    overview: string;
                    electricity: string;
                    gas: string;
                    water: string;
                    now: string;
                };
                configure: string;
                setup: {
                    next: string;
                    back: string;
                    done: string;
                    step: string;
                    no_statistics_selected_title: string;
                    no_statistics_selected_description: string;
                };
                charts: {
                    stat_house_energy_meter: string;
                    solar: string;
                    by_device: string;
                };
                cards: {
                    energy_usage_graph_title: string;
                    energy_solar_graph_title: string;
                    energy_gas_graph_title: string;
                    energy_water_graph_title: string;
                    energy_distribution_title: string;
                    energy_sources_table_title: string;
                    energy_devices_graph_title: string;
                    energy_devices_detail_graph_title: string;
                    energy_sankey_title: string;
                    water_sankey_title: string;
                    energy_top_consumers_title: string;
                    power_sankey_title: string;
                    water_flow_sankey_title: string;
                    power_sources_graph_title: string;
                };
            };
            history: {
                start_search: string;
                add_all: string;
                remove_all: string;
                download_data: string;
                download_data_error: string;
                add_card: string;
                add_card_error: string;
                error_no_data: string;
            };
        };
        tips: {
            keyboard_shortcut: string;
            key_c_tip: string;
            key_e_tip: string;
            key_m_tip: string;
            key_a_tip: string;
            key_shortcut_quick_search: string;
        };
    };
    "landing-page": {
        header: string;
        subheader: string;
        show_details: string;
        hide_details: string;
        network_issue: {
            title: string;
            error_get_network_info: string;
            description: string;
            resolve_different: string;
            use_cloudflare: string;
            use_google: string;
            no_primary_interface: string;
            failed: string;
            set_dns_failed: string;
            error: string;
            close: string;
        };
        logs: {
            scroll_down_button: string;
            fetch_error: string;
            retry: string;
            download_logs: string;
        };
        error_title: string;
        error_description: string;
        ui: {
            panel: {
                "page-onboarding": {
                    welcome: {
                        vision: string;
                        community: string;
                        download_app: string;
                        forums: string;
                        open_home_newsletter: string;
                        discord: string;
                        social_media: string;
                        playstore: string;
                        appstore: string;
                    };
                    help: string;
                };
            };
        };
    };
};

type EntityNameItem = {
    type: "entity" | "device" | "area" | "floor";
} | {
    type: "text";
    text: string;
};
interface EntityNameOptions {
    separator?: string;
}

type IntegrationType = "device" | "helper" | "hub" | "service" | "hardware" | "entity" | "system";
type DomainManifestLookup = Record<string, IntegrationManifest>;
interface IntegrationManifest {
    is_built_in: boolean;
    overwrites_built_in?: boolean;
    domain: string;
    name: string;
    config_flow: boolean;
    documentation: string;
    issue_tracker?: string;
    dependencies?: string[];
    after_dependencies?: string[];
    codeowners?: string[];
    requirements?: string[];
    ssdp?: {
        manufacturer?: string;
        modelName?: string;
        st?: string;
    }[];
    zeroconf?: string[];
    homekit?: {
        models: string[];
    };
    integration_type?: IntegrationType;
    loggers?: string[];
    quality_scale?: "bronze" | "silver" | "gold" | "platinum" | "no_score" | "internal" | "legacy" | "custom";
    iot_class: "assumed_state" | "cloud_polling" | "cloud_push" | "local_polling" | "local_push";
    single_config_entry?: boolean;
    version?: string;
}

interface ConfigEntry {
    entry_id: string;
    domain: string;
    title: string;
    source: string;
    state: "loaded" | "setup_error" | "migration_error" | "setup_retry" | "not_loaded" | "failed_unload" | "setup_in_progress";
    supports_options: boolean;
    supports_remove_device: boolean;
    supports_unload: boolean;
    supports_reconfigure: boolean;
    supported_subentry_types: Record<string, {
        supports_reconfigure: boolean;
    }>;
    num_subentries: number;
    pref_disable_new_entities: boolean;
    pref_disable_polling: boolean;
    disabled_by: "user" | null;
    reason: string | null;
    error_reason_translation_key: string | null;
    error_reason_translation_placeholders: Record<string, string> | null;
}

type LightColor = {
    color_temp_kelvin: number;
} | {
    hs_color: [number, number];
} | {
    rgb_color: [number, number, number];
} | {
    rgbw_color: [number, number, number, number];
} | {
    rgbww_color: [number, number, number, number, number];
};

interface RegistryEntry {
    created_at: number;
    modified_at: number;
}

interface Segment {
    id: string;
    name: string;
    group?: string;
}

type EntityCategory = "config" | "diagnostic";
interface EntityRegistryDisplayEntry {
    entity_id: string;
    name?: string;
    icon?: string;
    device_id?: string;
    area_id?: string;
    labels: string[];
    hidden?: boolean;
    entity_category?: EntityCategory;
    translation_key?: string;
    platform?: string;
    display_precision?: number;
    has_entity_name?: boolean;
}
interface EntityRegistryEntry extends RegistryEntry {
    id: string;
    entity_id: string;
    name: string | null;
    icon: string | null;
    platform: string;
    config_entry_id: string | null;
    config_subentry_id: string | null;
    device_id: string | null;
    area_id: string | null;
    labels: string[];
    disabled_by: "user" | "device" | "integration" | "config_entry" | null;
    hidden_by: Exclude<EntityRegistryEntry["disabled_by"], "config_entry">;
    entity_category: EntityCategory | null;
    has_entity_name: boolean;
    original_name?: string;
    unique_id: string;
    translation_key?: string;
    options: EntityRegistryOptions | null;
    categories: Record<string, string>;
}
interface SensorEntityOptions {
    display_precision?: number | null;
    suggested_display_precision?: number | null;
    unit_of_measurement?: string | null;
}
interface LightEntityOptions {
    favorite_colors?: LightColor[];
}
interface ValveEntityOptions {
    favorite_positions?: number[];
}
interface CoverEntityOptions {
    favorite_positions?: number[];
    favorite_tilt_positions?: number[];
}
interface NumberEntityOptions {
    unit_of_measurement?: string | null;
}
interface LockEntityOptions {
    default_code?: string | null;
}
interface AlarmControlPanelEntityOptions {
    default_code?: string | null;
}
interface CalendarEntityOptions {
    color?: string | null;
}
interface WeatherEntityOptions {
    precipitation_unit?: string | null;
    pressure_unit?: string | null;
    temperature_unit?: string | null;
    visibility_unit?: string | null;
    wind_speed_unit?: string | null;
}
interface SwitchAsXEntityOptions {
    entity_id: string;
    invert: boolean;
}
interface VacuumEntityOptions {
    area_mapping?: Record<string, string[]>;
    last_seen_segments?: Segment[];
}
interface DeviceTrackerEntityOptions {
    associated_zone?: string | null;
}
interface EntityRegistryOptions {
    number?: NumberEntityOptions;
    sensor?: SensorEntityOptions;
    alarm_control_panel?: AlarmControlPanelEntityOptions;
    calendar?: CalendarEntityOptions;
    lock?: LockEntityOptions;
    weather?: WeatherEntityOptions;
    light?: LightEntityOptions;
    cover?: CoverEntityOptions;
    valve?: ValveEntityOptions;
    vacuum?: VacuumEntityOptions;
    device_tracker?: DeviceTrackerEntityOptions;
    switch_as_x?: SwitchAsXEntityOptions;
    conversation?: Record<string, unknown>;
    "cloud.alexa"?: Record<string, unknown>;
    "cloud.google_assistant"?: Record<string, unknown>;
}

interface DeviceRegistryEntry extends RegistryEntry {
    id: string;
    config_entries: string[];
    config_entries_subentries: Record<string, (string | null)[]>;
    connections: [string, string][];
    identifiers: [string, string][];
    manufacturer: string | null;
    model: string | null;
    model_id: string | null;
    name: string | null;
    labels: string[];
    sw_version: string | null;
    hw_version: string | null;
    serial_number: string | null;
    via_device_id: string | null;
    area_id: string | null;
    name_by_user: string | null;
    entry_type: "service" | null;
    disabled_by: "user" | "integration" | "config_entry" | null;
    configuration_url: string | null;
    primary_config_entry: string | null;
}

interface AreaRegistryEntry extends RegistryEntry {
    aliases: string[];
    area_id: string;
    floor_id: string | null;
    humidity_entity_id: string | null;
    icon: string | null;
    labels: string[];
    name: string;
    picture: string | null;
    temperature_entity_id: string | null;
}

interface FloorRegistryEntry extends RegistryEntry {
    floor_id: string;
    name: string;
    level: number | null;
    icon: string | null;
    aliases: string[];
}

interface CustomShortcutItem {
    type: "custom";
    path: string;
    label?: string;
    icon?: string;
    color?: string;
}
interface SummaryShortcutItem {
    type: "summary";
    key: string;
    hidden?: boolean;
}
type ShortcutItem = CustomShortcutItem | SummaryShortcutItem;

interface CoreFrontendUserData {
    showEntityIdPicker?: boolean;
    default_panel?: string;
    apps_info_dismissed?: boolean;
}
interface SidebarFrontendUserData {
    panelOrder?: string[];
    hiddenPanels?: string[];
}
interface CoreFrontendSystemData {
    default_panel?: string;
    onboarded_version?: string;
    onboarded_date?: string;
}
interface HomeFrontendSystemData {
    favorite_entities?: string[];
    welcome_banner_dismissed?: boolean;
    hide_welcome_message?: boolean;
    hide_suggested_entities?: boolean;
    shortcuts?: ShortcutItem[];
}
declare global {
    interface FrontendUserData {
        core: CoreFrontendUserData;
        sidebar: SidebarFrontendUserData;
    }
    interface FrontendSystemData {
        core: CoreFrontendSystemData;
        home: HomeFrontendSystemData;
    }
}

declare enum NumberFormat {
    language = "language",
    system = "system",
    comma_decimal = "comma_decimal",
    decimal_comma = "decimal_comma",
    quote_decimal = "quote_decimal",
    space_comma = "space_comma",
    none = "none"
}
declare enum TimeFormat {
    language = "language",
    system = "system",
    am_pm = "12",
    twenty_four = "24"
}
declare enum TimeZone {
    local = "local",
    server = "server"
}
declare enum DateFormat {
    language = "language",
    system = "system",
    DMY = "DMY",
    MDY = "MDY",
    YMD = "YMD"
}
declare enum FirstWeekday {
    language = "language",
    monday = "monday",
    tuesday = "tuesday",
    wednesday = "wednesday",
    thursday = "thursday",
    friday = "friday",
    saturday = "saturday",
    sunday = "sunday"
}
interface FrontendLocaleData {
    language: string;
    number_format: NumberFormat;
    time_format: TimeFormat;
    date_format: DateFormat;
    first_weekday: FirstWeekday;
    time_zone: TimeZone;
}
declare global {
    interface FrontendUserData {
        language: FrontendLocaleData;
    }
}
type TranslationCategory = "title" | "state" | "entity" | "entity_component" | "exceptions" | "config" | "config_subentries" | "config_panel" | "options" | "device_automation" | "mfa_setup" | "system_health" | "application_credentials" | "issues" | "preview_features" | "selector" | "services" | "triggers" | "conditions";
declare const getHassTranslations: (hass: HomeAssistant, language: string, category: TranslationCategory, integration?: string | string[], config_flow?: boolean) => Promise<Record<string, unknown>>;

interface ThemeVars {
    "primary-color": string;
    "text-primary-color": string;
    "accent-color": string;
    [key: string]: string;
}
type Theme = ThemeVars & {
    modes?: {
        light?: ThemeVars;
        dark?: ThemeVars;
    };
};
interface Themes {
    default_theme: string;
    default_dark_theme: string | null;
    themes: Record<string, Theme>;
    darkMode: boolean;
    theme: string;
}

declare global {
    var __DEV__: boolean;
    var __DEMO__: boolean;
    var __BUILD__: "modern" | "legacy";
    var __VERSION__: string;
    var __STATIC_PATH__: string;
    var __BACKWARDS_COMPAT__: boolean;
    var __HASS_URL__: string;
    interface Window {
        customPanelJS: string;
        ShadyCSS: {
            nativeCss: boolean;
            nativeShadow: boolean;
            prepareTemplate(templateElement: any, elementName: any, elementExtension: any): any;
            styleElement(element: any): any;
            styleSubtree(element: any, overrideProperties: any): any;
            styleDocument(overrideProperties: any): any;
            getComputedStyleValue(element: any, propertyName: any): any;
        };
    }
    interface HASSDomEvents {
        "value-changed": {
            value: unknown;
        };
        change: undefined;
        "hass-logout": undefined;
        "config-refresh": undefined;
        "hass-api-called": {
            success: boolean;
            response: unknown;
        };
    }
    interface ImportMeta {
        url: string;
    }
    namespace Intl {
        const DurationFormat: typeof FormatJSDurationFormat;
    }
}
type Constructor<T = any> = new (...args: any[]) => T;
interface Credential {
    auth_provider_type: string;
    auth_provider_id: string;
}
interface MFAModule {
    id: string;
    name: string;
    enabled: boolean;
}
interface CurrentUser {
    id: string;
    is_owner: boolean;
    is_admin: boolean;
    name: string;
    credentials: Credential[];
    mfa_modules: MFAModule[];
}
interface ThemeSettings {
    theme: string;
    dark?: boolean;
    primaryColor?: string;
    accentColor?: string;
}
interface PanelInfo<T = Record<string, any> | null> {
    component_name: string;
    config: T;
    icon: string | null;
    title: string | null;
    url_path: string;
    config_panel_domain?: string;
    default_visible?: boolean;
    require_admin?: boolean;
    show_in_sidebar?: boolean;
}
type Panels = Record<string, PanelInfo>;
type FullCalendarView = "dayGridMonth" | "dayGridWeek" | "dayGridDay" | "listWeek";
declare const THEME_MODES: readonly ["auto", "light", "dark"];
type ThemeMode = (typeof THEME_MODES)[number];
interface ToggleButton {
    label: string;
    iconPath?: string;
    value: string;
}
interface Translation {
    nativeName: string;
    isRTL: boolean;
    hash: string;
}
interface TranslationMetadata {
    fragments: string[];
    translations: Record<string, Translation>;
}
type TranslationDict = typeof _default;
interface Context {
    id: string;
    parent_id?: string;
    user_id?: string | null;
}
interface ValuePart {
    type: "value" | "literal" | "unit";
    value: string;
}
interface ServiceCallResponse<T = any> {
    context: Context;
    response?: T;
}
interface ServiceCallRequest {
    domain: string;
    service: string;
    serviceData?: Record<string, any>;
    target?: HassServiceTarget;
}
interface HomeAssistantRegistries {
    entities: Record<string, EntityRegistryDisplayEntry>;
    devices: Record<string, DeviceRegistryEntry>;
    areas: Record<string, AreaRegistryEntry>;
    floors: Record<string, FloorRegistryEntry>;
}
interface HomeAssistantInternationalization {
    language: string;
    selectedLanguage: string | null;
    locale: FrontendLocaleData;
    localize: LocalizeFunc;
    translationMetadata: TranslationMetadata;
    loadBackendTranslation(category: Parameters<typeof getHassTranslations>[2], integrations?: Parameters<typeof getHassTranslations>[3], configFlow?: Parameters<typeof getHassTranslations>[4]): Promise<LocalizeFunc>;
    loadFragmentTranslation(fragment: string): Promise<LocalizeFunc | undefined>;
}
type CallWS = <T>(msg: MessageBase) => Promise<T>;
interface HomeAssistantApi {
    callService<T = any>(domain: ServiceCallRequest["domain"], service: ServiceCallRequest["service"], serviceData?: ServiceCallRequest["serviceData"], target?: ServiceCallRequest["target"], notifyOnError?: boolean, returnResponse?: boolean): Promise<ServiceCallResponse<T>>;
    callApi<T>(method: "GET" | "POST" | "PUT" | "DELETE", path: string, parameters?: Record<string, any>, headers?: Record<string, string>): Promise<T>;
    callApiRaw(// introduced in 2024.11
    method: "GET" | "POST" | "PUT" | "DELETE", path: string, parameters?: Record<string, any>, headers?: Record<string, string>, signal?: AbortSignal): Promise<Response>;
    fetchWithAuth(path: string, init?: Record<string, any>): Promise<Response>;
    sendWS(msg: MessageBase): void;
    callWS: CallWS;
}
interface HomeAssistantFormatters {
    formatEntityState(stateObj: HassEntity, state?: string): string;
    formatEntityStateToParts(stateObj: HassEntity, state?: string): ValuePart[];
    formatEntityAttributeValue(stateObj: HassEntity, attribute: string, value?: any): string;
    formatEntityAttributeValueToParts(stateObj: HassEntity, attribute: string, value?: any): ValuePart[];
    formatEntityAttributeName(stateObj: HassEntity, attribute: string): string;
    formatEntityName(stateObj: HassEntity, type: string | EntityNameItem | EntityNameItem[] | undefined, separator?: EntityNameOptions): string;
}
interface HomeAssistantConnection {
    connection: Connection;
    connected: boolean;
    debugConnection: boolean;
    hassUrl(path?: any): string;
}
interface HomeAssistantUI {
    themes: Themes;
    selectedTheme: ThemeSettings | null;
    panels: Panels;
    panelUrl: string;
    dockedSidebar: "docked" | "always_hidden" | "auto";
    kioskMode: boolean;
    enableShortcuts: boolean;
    vibrate: boolean;
    suspendWhenHidden: boolean;
}
interface HomeAssistantConfig {
    auth: Auth & {
        external?: ExternalMessaging;
    };
    config: HassConfig;
    user?: CurrentUser;
    userData?: CoreFrontendUserData;
    systemData?: CoreFrontendSystemData;
}
interface HomeAssistant extends HomeAssistantRegistries, HomeAssistantInternationalization, HomeAssistantApi, HomeAssistantFormatters, HomeAssistantConnection, HomeAssistantUI, HomeAssistantConfig {
    states: HassEntities;
    services: HassServices;
}

type LocalizeKeys = FlattenObjectKeys<Omit<TranslationDict, "supervisor">> | `panel.${string}` | `ui.card.alarm_control_panel.${string}` | `ui.card.weather.attributes.${string}` | `ui.card.weather.cardinal_direction.${string}` | `ui.card.lawn_mower.actions.${string}` | `ui.common.${string}` | `ui.components.calendar.event.rrule.${string}` | `ui.components.selectors.file.${string}` | `ui.components.logbook.messages.detected_device_classes.${string}` | `ui.components.logbook.messages.cleared_device_classes.${string}` | `ui.dialogs.entity_registry.editor.${string}` | `ui.dialogs.more_info_control.lawn_mower.${string}` | `ui.dialogs.more_info_control.vacuum.${string}` | `ui.dialogs.quick-bar.commands.${string}` | `ui.dialogs.unhealthy.reasons.${string}` | `ui.dialogs.unsupported.reasons.${string}` | `ui.panel.config.${string}.${"caption" | "description"}` | `ui.panel.config.dashboard.${string}` | `ui.panel.config.storage.segments.${string}` | `ui.panel.config.zha.${string}` | `ui.panel.config.zwave_js.${string}` | `ui.panel.lovelace.card.${string}` | `ui.panel.lovelace.editor.${string}` | `ui.panel.page-authorize.form.${string}` | `component.${string}`;
type FlattenObjectKeys<T extends Record<string, any>, Key extends keyof T = keyof T> = Key extends string ? T[Key] extends Record<string, unknown> ? `${Key}.${FlattenObjectKeys<T[Key]>}` : `${Key}` : never;
type LocalizeFunc<Keys extends string = LocalizeKeys> = (key: Keys, values?: Record<string, string | number | HTMLTemplateResult | null | undefined>) => string;

declare const MODES: readonly ["single", "restart", "queued", "parallel"];
interface ManualScriptConfig {
    alias: string;
    description?: string;
    sequence: Action | Action[];
    icon?: string;
    mode?: (typeof MODES)[number];
    max?: number;
    fields?: Fields;
}
type Fields = Record<string, Field>;
interface Field {
    name?: string;
    description?: string;
    advanced?: boolean;
    required?: boolean;
    example?: string;
    default?: any;
    selector?: any;
}
interface BaseAction {
    alias?: string;
    note?: string;
    continue_on_error?: boolean;
    enabled?: boolean;
}
interface EventAction extends BaseAction {
    event: string;
    event_data?: Record<string, any>;
    event_data_template?: Record<string, any>;
}
interface ServiceAction extends BaseAction {
    action?: string;
    service_template?: string;
    entity_id?: string;
    target?: HassServiceTarget;
    data?: Record<string, unknown>;
    response_variable?: string;
    metadata?: Record<string, unknown>;
}
interface DeviceAction extends BaseAction {
    type: string;
    device_id: string;
    domain: string;
    entity_id: string;
}
interface DelayActionParts extends BaseAction {
    milliseconds?: number;
    seconds?: number;
    minutes?: number;
    hours?: number;
    days?: number;
}
interface DelayAction extends BaseAction {
    delay: number | Partial<DelayActionParts> | string;
}
interface WaitAction extends BaseAction {
    wait_template: string;
    timeout?: number;
    continue_on_timeout?: boolean;
}
interface WaitForTriggerActionParts extends BaseAction {
    milliseconds?: number;
    seconds?: number;
    minutes?: number;
    hours?: number;
    days?: number;
}
interface WaitForTriggerAction extends BaseAction {
    wait_for_trigger: Trigger | Trigger[];
    timeout?: number | Partial<WaitForTriggerActionParts> | string;
    continue_on_timeout?: boolean;
}
interface RepeatAction extends BaseAction {
    repeat: CountRepeat | WhileRepeat | UntilRepeat | ForEachRepeat;
}
interface BaseRepeat extends BaseAction {
    sequence: Action | Action[];
}
interface CountRepeat extends BaseRepeat {
    count: number | string;
}
interface WhileRepeat extends BaseRepeat {
    while: Condition$1[];
}
interface UntilRepeat extends BaseRepeat {
    until: Condition$1[];
}
interface ForEachRepeat extends BaseRepeat {
    for_each: string | any[];
}
interface Option {
    alias?: string;
    note?: string;
    conditions: string | Condition$1[];
    sequence: Action | Action[];
}
interface ChooseAction extends BaseAction {
    choose: Option | Option[] | null;
    default?: Action | Action[];
}
interface IfAction extends BaseAction {
    if: string | Condition$1[];
    then: Action | Action[];
    else?: Action | Action[];
}
interface VariablesAction extends BaseAction {
    variables: Record<string, unknown>;
}
interface StopAction extends BaseAction {
    stop: string;
    response_variable?: string;
    error?: boolean;
}
interface SequenceAction extends BaseAction {
    sequence: (ManualScriptConfig | Action)[];
    metadata?: {};
}
interface ParallelAction extends BaseAction {
    parallel: ManualScriptConfig | Action | (ManualScriptConfig | Action)[];
}
interface UnknownAction extends BaseAction, Record<string, unknown> {
}
type NonConditionAction = EventAction | DeviceAction | ServiceAction | DelayAction | WaitAction | WaitForTriggerAction | RepeatAction | ChooseAction | IfAction | VariablesAction | StopAction | SequenceAction | ParallelAction | UnknownAction;
type Action = NonConditionAction | Condition$1 | ShorthandAndCondition | ShorthandOrCondition | ShorthandNotCondition;

interface AssistPipeline {
    id: string;
    name: string;
    language: string;
    conversation_engine: string;
    conversation_language: string | null;
    prefer_local_intents?: boolean;
    stt_engine: string | null;
    stt_language: string | null;
    tts_engine: string | null;
    tts_language: string | null;
    tts_voice: string | null;
    wake_word_entity: string | null;
    wake_word_id: string | null;
}

declare class HaSvgIcon extends LitElement {
    path?: string;
    secondaryPath?: string;
    viewBox?: string;
    protected render(): SVGTemplateResult;
    static styles: lit.CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-svg-icon": HaSvgIcon;
    }
}

/**
 * Home Assistant dropdown item component
 *
 * @element ha-dropdown-item
 * @extends {DropdownItem}
 *
 * @summary
 * A stylable dropdown item component supporting Home Assistant theming, variants, and appearances based on webawesome dropdown item.
 *
 */
declare class HaDropdownItem extends DropdownItem {
    selected: boolean;
    protected renderCheckboxIcon(): lit_html.TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-dropdown-item": HaDropdownItem;
    }
}

/**
 * Home Assistant button component
 *
 * @element ha-button
 * @extends {Button}
 *
 * @summary
 * A stylable button component supporting Home Assistant theming, variants, and appearances based on webawesome button.
 *
 * @slot - Label of the button
 * @slot start - The prefix container (usually for icons).
 * @slot end - The suffix container (usually for icons).
 *
 * @csspart base - The component's base wrapper.
 * @csspart start - The container that wraps the prefix.
 * @csspart label - The button's label.
 * @csspart end - The container that wraps the suffix.
 * @csspart caret - The button's caret icon, an `<sl-icon>` element.
 * @csspart spinner - The spinner that shows when the button is in the loading state.
 *
 * @cssprop --ha-button-height - The height of the button.
 * @cssprop --ha-button-border-radius - The border radius of the button. defaults to `var(--ha-border-radius-pill)`.
 *
 * @attr {("small"|"medium"|"large")} size - Sets the button size.
 * @attr {("brand"|"neutral"|"danger"|"warning"|"success")} variant - Sets the button color variant. "primary" is default.
 * @attr {("accent"|"filled"|"plain")} appearance - Sets the button appearance.
 * @attr {boolean} loading - shows a loading indicator instead of the buttons label and disable buttons click.
 * @attr {boolean} disabled - Disables the button and prevents user interaction.
 */
declare class HaButton extends Button {
    variant: "brand" | "neutral" | "success" | "warning" | "danger";
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-button": HaButton;
    }
}

declare class HaIconButton extends LitElement {
    disabled: boolean;
    path?: string;
    label?: string;
    ariaHasPopup: "false" | "true" | "menu" | "listbox" | "tree" | "grid";
    hideTitle: boolean;
    selected: boolean;
    href?: string;
    target?: "_blank" | "_parent" | "_self" | "_top";
    rel?: string;
    download?: string;
    static shadowRootOptions: ShadowRootInit;
    protected render(): TemplateResult;
    static styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-icon-button": HaIconButton;
    }
}

/**
 * Home Assistant dropdown component
 *
 * @element ha-dropdown
 * @extends {Dropdown}
 *
 * @summary
 * A stylable dropdown component supporting Home Assistant theming, variants, and appearances based on webawesome dropdown.
 *
 */
declare class HaDropdown extends Dropdown {
    dropdownTag: string;
    dropdownItemTag: string;
    get anchorElement(): HTMLButtonElement | HaIconButton | undefined;
    set anchorElement(element: HTMLButtonElement | HaIconButton | undefined);
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-dropdown": HaDropdown;
    }
}

declare class InputHelperText extends LitElement {
    disabled: boolean;
    protected render(): TemplateResult;
    static styles: lit.CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-input-helper-text": InputHelperText;
    }
}

interface HaSelectOption {
    value: string | number;
    label?: string;
    secondary?: string;
    iconPath?: string;
    disabled?: boolean;
}
declare class HaSelect extends LitElement {
    clearable: boolean;
    options?: HaSelectOption[] | string[] | number[];
    label?: string;
    helper?: string;
    value?: string | number;
    required: boolean;
    disabled: boolean;
    private _opened;
    private _triggerField;
    private _getValueLabel;
    protected render(): lit_html.TemplateResult<1>;
    private _renderField;
    private _renderHelper;
    private _handleSelect;
    private _clearValue;
    private _handleShow;
    private _handleHide;
    static styles: lit.CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-select": HaSelect;
    }
    interface HASSDomEvents {
        selected: {
            value: string | number | undefined;
        };
    }
}

declare class HaAssistPipelinePicker extends LitElement {
    value?: string;
    label?: string;
    hass: HomeAssistant;
    disabled: boolean;
    required: boolean;
    includeLastUsed: boolean;
    _pipelines?: AssistPipeline[];
    _preferredPipeline: string | null;
    private get _default();
    protected render(): typeof nothing | lit_html.TemplateResult<1>;
    protected firstUpdated(changedProperties: PropertyValues<this>): void;
    static styles: lit.CSSResult;
    private _changed;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-assist-pipeline-picker": HaAssistPipelinePicker;
    }
}

declare class HaTooltip extends Tooltip {
    /** The amount of time to wait before showing the tooltip when the user mouses in. */
    showDelay: number;
    /** The amount of time to wait before hiding the tooltip when the user mouses out.. */
    hideDelay: number;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-tooltip": HaTooltip;
    }
}

declare class HaHelpTooltip extends LitElement {
    label: string;
    position: "top" | "bottom" | "left" | "right" | "top-start" | "top-end" | "right-start" | "right-end" | "bottom-start" | "bottom-end" | "left-start" | "left-end";
    protected render(): TemplateResult;
    static styles: lit.CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-help-tooltip": HaHelpTooltip;
    }
}

declare class HaIcon extends LitElement {
    icon?: string;
    private _path?;
    private _secondaryPath?;
    private _viewBox?;
    private _legacy;
    willUpdate(changedProps: PropertyValues<this>): void;
    protected render(): typeof nothing | lit_html.TemplateResult<1>;
    private _loadIcon;
    private _setCustomPath;
    private _setPath;
    static styles: lit.CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-icon": HaIcon;
    }
}

declare class HaDomainIcon extends LitElement {
    domain?: string;
    deviceClass?: string;
    state?: string;
    icon?: string;
    brandFallback?: boolean;
    private _hassConfig?;
    private _connection?;
    private _hassUi?;
    protected render(): typeof nothing | lit_html.TemplateResult<1>;
    private _renderFallback;
    static styles: lit.CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-domain-icon": HaDomainIcon;
    }
}

declare class HaNavigationPicker extends LitElement {
    hass: HomeAssistant;
    label?: string;
    value?: string;
    helper?: string;
    disabled: boolean;
    required: boolean;
    excludePaths?: string[];
    addButtonLabel?: string;
    private _loading;
    context?: ActionRelatedContext;
    protected firstUpdated(): void;
    private _navigationItems;
    private _configEntryLookup;
    private _navigationGroups;
    private _getRelatedItems;
    protected render(): lit_html.TemplateResult<1>;
    private _valueRenderer;
    private _rowRenderer;
    private _fuseIndexes;
    private _getItems;
    private _sortBySortingLabel;
    private _loadNavigationItems;
    protected updated(changedProps: PropertyValues<this>): void;
    private _loadRelatedItems;
    private _fetchRelatedItems;
    private _loadConfigEntries;
    private _valueChanged;
    private _setValue;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-navigation-picker": HaNavigationPicker;
    }
}

/**
 * Home Assistant checkbox component
 *
 * @element ha-checkbox
 * @extends {WaCheckbox}
 *
 * @summary
 * A Home Assistant themed wrapper around the Web Awesome checkbox.
 *
 * @slot - The checkbox's label.
 * @slot hint - Text that describes how to use the checkbox.
 *
 * @csspart base - The component's label wrapper.
 * @csspart control - The square container that wraps the checkbox's checked state.
 * @csspart checked-icon - The checked icon, a `<wa-icon>` element.
 * @csspart indeterminate-icon - The indeterminate icon, a `<wa-icon>` element.
 * @csspart label - The container that wraps the checkbox's label.
 * @csspart hint - The hint's wrapper.
 *
 * @cssprop --ha-checkbox-size - The checkbox size. Defaults to `20px`.
 * @cssprop --ha-checkbox-border-color - The border color of the checkbox control. Defaults to `--ha-color-border-neutral-normal`.
 * @cssprop --ha-checkbox-border-color-hover - The border color of the checkbox control on hover. Defaults to `--ha-checkbox-border-color`, then `--ha-color-border-neutral-loud`.
 * @cssprop --ha-checkbox-background-color - The background color of the checkbox control. Defaults to `--wa-form-control-background-color`.
 * @cssprop --ha-checkbox-background-color-hover - The background color of the checkbox control on hover. Defaults to `--ha-color-form-background-hover`.
 * @cssprop --ha-checkbox-checked-background-color - The background color when checked or indeterminate. Defaults to `--ha-color-fill-primary-loud-resting`.
 * @cssprop --ha-checkbox-checked-background-color-hover - The background color when checked or indeterminate on hover. Defaults to `--ha-color-fill-primary-loud-hover`.
 * @cssprop --ha-checkbox-checked-icon-color - The color of the checked and indeterminate icons. Defaults to `--wa-color-brand-on-loud`.
 * @cssprop --ha-checkbox-checked-icon-scale - The size of the checked and indeterminate icons relative to the checkbox. Defaults to `0.9`.
 * @cssprop --ha-checkbox-border-radius - The border radius of the checkbox control. Defaults to `--ha-border-radius-sm`.
 * @cssprop --ha-checkbox-border-width - The border width of the checkbox control. Defaults to `--ha-border-width-md`.
 * @cssprop --ha-checkbox-required-marker - The marker shown after the label for required fields. Defaults to `"*"`.
 * @cssprop --ha-checkbox-required-marker-offset - Offset of the required marker. Defaults to `0.1rem`.
 *
 * @attr {boolean} checked - Draws the checkbox in a checked state.
 * @attr {boolean} disabled - Disables the checkbox.
 * @attr {boolean} indeterminate - Draws the checkbox in an indeterminate state.
 * @attr {boolean} required - Makes the checkbox a required field.
 */
declare class HaCheckbox extends WaCheckbox {
    /**
     * Returns the configured checkbox value, independent of checked state.
     *
     * The base Web Awesome checkbox returns `null` when unchecked to align with
     * form submission rules. Home Assistant components expect the configured value
     * to remain readable, so this wrapper always exposes the internal value.
     */
    get value(): string | null;
    /** Sets the configured checkbox value. */
    set value(val: string | null);
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-checkbox": HaCheckbox;
    }
}

declare class HaMarkdownElement extends ReactiveElement {
    content?: any;
    allowSvg: boolean;
    allowDataUrl: boolean;
    breaks: boolean;
    lazyImages: boolean;
    cache: boolean;
    disconnectedCallback(): void;
    protected createRenderRoot(): this;
    private _renderPromise;
    protected update(changedProps: PropertyValues<this>): void;
    protected getUpdateComplete(): Promise<boolean>;
    protected willUpdate(_changedProperties: PropertyValues<this>): void;
    private _computeCacheKey;
    private _render;
    private _resize;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-markdown-element": HaMarkdownElement;
    }
}

declare class HaMarkdown extends LitElement {
    content?: any;
    allowSvg: boolean;
    allowDataUrl: boolean;
    breaks: boolean;
    lazyImages: boolean;
    cache: boolean;
    private _markdownElement?;
    protected getUpdateComplete(): Promise<boolean>;
    protected render(): typeof nothing | lit_html.TemplateResult<1>;
    static styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-markdown": HaMarkdown;
    }
}

declare class HaSelector extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    name?: string;
    selector: Selector;
    value?: any;
    label?: string;
    helper?: string;
    localizeValue?: (key: string) => string;
    placeholder?: any;
    disabled: boolean;
    required: boolean;
    context?: Record<string, any>;
    private _selectorElement?;
    reportValidity(): boolean;
    focus(): Promise<void>;
    private get _type();
    protected willUpdate(changedProps: PropertyValues<this>): void;
    private _handleLegacySelector;
    protected render(): lit_html.TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector": HaSelector;
    }
}

declare class HaRipple extends Ripple {
    private readonly attachableTouchController;
    attach(control: HTMLElement): void;
    disconnectedCallback(): void;
    detach(): void;
    private _handleTouchEnd;
    private _onTouchControlChange;
    static styles: lit.CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-ripple": HaRipple;
    }
}

declare class HaMdListItem extends ListItemEl {
    static styles: lit.CSSResult[];
    protected renderRipple(): TemplateResult | typeof nothing;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-md-list-item": HaMdListItem;
    }
}

declare class HaComboBoxItem extends HaMdListItem {
    borderTop: boolean;
    static styles: lit.CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-combo-box-item": HaComboBoxItem;
    }
}

declare class HaServicePicker extends LitElement {
    hass: HomeAssistant;
    disabled: boolean;
    label?: string;
    placeholder?: string;
    value?: string;
    showServiceId: boolean;
    private _picker?;
    open(): Promise<void>;
    protected firstUpdated(props: PropertyValues<this>): void;
    private _rowRenderer;
    private _valueRenderer;
    protected render(): TemplateResult;
    private _getItems;
    private _services;
    private _valueChanged;
    private _setValue;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-service-picker": HaServicePicker;
    }
}

declare class HaServiceSectionIcon extends LitElement {
    hass: HomeAssistant;
    service?: string;
    section?: string;
    icon?: string;
    protected render(): symbol | lit_html.TemplateResult<1>;
    private _renderFallback;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-service-section-icon": HaServiceSectionIcon;
    }
}

declare class HaSettingsRow extends LitElement {
    narrow: boolean;
    slim: boolean;
    threeLine: boolean;
    wrapHeading: boolean;
    empty: boolean;
    private readonly _hasSlotController;
    protected render(): TemplateResult;
    static styles: lit.CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-settings-row": HaSettingsRow;
    }
}

interface CompletionItem {
    label: string;
    value: string;
    subValue?: string;
}
declare class HaCodeEditorCompletionItems extends LitElement {
    items: CompletionItem[];
    render(): lit_html.TemplateResult<1>[];
    static styles: lit.CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-code-editor-completion-items": HaCodeEditorCompletionItems;
    }
}

declare class HaIconButtonGroup extends LitElement {
    protected render(): TemplateResult;
    static styles: lit.CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-icon-button-group": HaIconButtonGroup;
    }
}

interface HaIconButtonToolbarItem {
    [key: string]: any;
    path: string;
    label: string;
    id?: string;
    disabled?: boolean;
    tooltip?: string;
    action?: (e: Event) => any;
}
declare class HaIconButtonToolbar extends LitElement {
    items: (HaIconButtonToolbarItem | string)[];
    private _buttons?;
    findToolbarButtons(selector?: string): HaIconButton[] | undefined;
    findToolbarButtonById(id: any): HaIconButton | undefined;
    protected render(): TemplateResult;
    static styles: lit.CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-icon-button-toolbar": HaIconButtonToolbar;
    }
}

declare global {
    interface HASSDomEvents {
        "editor-save": undefined;
        "test-toggle": undefined;
    }
}
declare class HaCodeEditor extends ReactiveElement {
    codemirror?: EditorView;
    mode: string;
    autofocus: boolean;
    readOnly: boolean;
    linewrap: boolean;
    autocompleteEntities: boolean;
    autocompleteIcons: boolean;
    error: boolean;
    lint: boolean;
    disableFullscreen: boolean;
    inDialog: boolean;
    hasToolbar: boolean;
    hasTest: boolean;
    testing: boolean;
    placeholder?: string;
    private _value;
    private _isFullscreen;
    private _canUndo;
    private _canRedo;
    private _canCopy;
    private _config?;
    private _i18n?;
    private _labels?;
    private _registries?;
    private _formatters?;
    private _states?;
    private _loadedCodeMirror?;
    private _completionInfoPopover?;
    private _completionInfoContainer?;
    private _completionInfoDestroy?;
    private _completionInfoRequest;
    private _completionInfoKey?;
    private _completionInfoFrame?;
    private _editorToolbar?;
    private _iconList?;
    set value(value: string);
    get value(): string;
    get hasComments(): boolean;
    /**
     * Push a YAML parse error (or null to clear) into the lint gutter as a
     * diagnostic. Avoids re-parsing the document — the caller (ha-yaml-editor)
     * already has the error from its own js-yaml load() call.
     */
    setYamlError(err: {
        mark?: {
            position: number;
            line: number;
            column: number;
        };
        reason?: string;
    } | null): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected scheduleUpdate(): Promise<void>;
    protected update(changedProps: PropertyValues): void;
    private get _mode();
    private _createCodeMirror;
    private _fullscreenLabel;
    private _fullscreenIcon;
    private _createEditorToolbar;
    private _updateToolbar;
    private _updateToolbarButtons;
    private _updateFullscreenState;
    private _handleClipboardClick;
    private _handleTestClick;
    private _handleUndoClick;
    private _handleRedoClick;
    private _handleFullscreenClick;
    private _handleFindReplaceClick;
    private _handleKeyDown;
    /**
     * Builds a HassArgHoverContext from the context objects so that
     * haJinjaHoverSource can resolve entity / device / area friendly names
     * without importing the full HomeAssistant type into the resource file.
     */
    private _hassArgHoverContext;
    private _renderInfo;
    private _renderAttributeInfo;
    private _getCompletionInfo;
    private _ensureCompletionInfoPopover;
    private _clearCompletionInfo;
    private _renderCompletionInfoContent;
    private _syncCompletionInfoPopover;
    private _syncCompletionInfoPopoverNow;
    private _getStates;
    private get _jinjaFunctionArgTypes();
    private static readonly _STATE_FIELDS;
    /**
     * Handles `states.<domain>.<entity>.<field>.<attr>` dot-notation completions.
     *
     * Walks the MemberExpression chain in the Jinja syntax tree rooted at the
     * `states` VariableName and offers completions depending on depth:
     *   - `states.`           → all domains
     *   - `states.<d>.`       → all entity object_ids for that domain
     *   - `states.<d>.<e>.`   → fixed state fields
     *   - `states.<d>.<e>.attributes.` → attribute names from hass.states
     *
     * Returns undefined to fall through when the cursor is not inside a
     * `states.` chain; returns null/CompletionResult to short-circuit.
     */
    private _statesDotNotationCompletions;
    /**
     * Returns completions when inside a quoted Jinja string argument of a known
     * HA function, or inside a states['...'] subscript.
     * Returns undefined to signal the caller should fall through to other logic.
     */
    private _jinjaStringArgCompletions;
    /**
     * Scans the ArgumentList for the first argument whose type is `entity_id`
     * and returns the literal string value it contains, or null if not found /
     * not a plain string literal.
     */
    private _entityIdFromSiblingArg;
    /**
     * Dispatches to the appropriate completion result builder for the given
     * argument type. Add new cases here as completion sources are implemented.
     *
     * Always returns a CompletionResult (never null) so that other completion
     * sources are suppressed when the cursor is inside a known typed string arg.
     * An empty options list is returned when no completions are available.
     */
    private _completionResultForArgType;
    /**
     * Build a CompletionResult for attribute names of a specific entity.
     * `entityId` may be null when the sibling entity arg is not yet filled in,
     * in which case an empty result is returned (other sources stay suppressed).
     */
    private _attributeCompletionResult;
    /** Build a CompletionResult for entity IDs, with `from` set inside the quotes. */
    private _entityCompletionResult;
    private _getDevices;
    /** Build a CompletionResult for device IDs, with `from` set inside the quotes. */
    private _deviceCompletionResult;
    private _getAreas;
    /** Build a CompletionResult for area IDs, with `from` set inside the quotes. */
    private _areaCompletionResult;
    private _getFloors;
    /** Build a CompletionResult for floor IDs, with `from` set inside the quotes. */
    private _floorCompletionResult;
    private _getLabels;
    /** Build a CompletionResult for label IDs, with `from` set inside the quotes. */
    private _labelCompletionResult;
    private _entityCompletions;
    private _getIconItems;
    private _mdiCompletions;
    private _onUpdate;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-code-editor": HaCodeEditor;
    }
}

declare class HaYamlEditor extends LitElement {
    value?: any;
    yamlSchema: Schema;
    defaultValue?: any;
    isValid: boolean;
    label?: string;
    autoUpdate: boolean;
    readOnly: boolean;
    disableFullscreen: boolean;
    inDialog: boolean;
    required: boolean;
    copyClipboard: boolean;
    hasExtraActions: boolean;
    private _yaml;
    private _i18n?;
    _codeEditor?: HaCodeEditor;
    setValue(value: any): void;
    protected firstUpdated(): void;
    protected willUpdate(changedProperties: PropertyValues<this>): void;
    focus(): void;
    disableCodeEditorFullscreen(): void;
    protected render(): typeof nothing | lit_html.TemplateResult<1>;
    private _onChange;
    get yaml(): string;
    get codemirror(): _codemirror_view.EditorView | undefined;
    get hasComments(): boolean;
    private _onEditorSave;
    private _copyYaml;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-yaml-editor": HaYamlEditor;
    }
}

declare class HaServiceControl extends LitElement {
    hass: HomeAssistant;
    value?: {
        action: string;
        target?: HassServiceTarget;
        data?: Record<string, any>;
    };
    disabled: boolean;
    narrow: boolean;
    showServiceId: boolean;
    hidePicker: boolean;
    hideDescription: boolean;
    private _value;
    private _checkedKeys;
    private _manifest?;
    private _yamlEditor?;
    private _stickySelector;
    protected willUpdate(changedProperties: PropertyValues<this>): void;
    private _getServiceInfo;
    private _getTargetedEntities;
    private _filterField;
    private _targetSelector;
    protected render(): lit_html.TemplateResult<1>;
    private _getSectionDescription;
    private _hasFilteredFields;
    private _renderField;
    private _selectorContext;
    private _localizeValueCallback;
    private _toggleCheckbox;
    private _checkboxChanged;
    private _serviceChanged;
    private _entityPicked;
    private _targetChanged;
    private _serviceDataChanged;
    private _dataChanged;
    private _fetchManifest;
    static styles: lit.CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-service-control": HaServiceControl;
    }
}

interface ToggleActionConfig extends BaseActionConfig {
    action: "toggle";
}
interface CallServiceActionConfig extends BaseActionConfig {
    action: "call-service" | "perform-action";
    /** @deprecated "service" is kept for backwards compatibility. Replaced by "perform_action". */
    service?: string;
    perform_action: string;
    target?: HassServiceTarget;
    /** @deprecated "service_data" is kept for backwards compatibility. Replaced by "data". */
    service_data?: Record<string, unknown>;
    data?: Record<string, unknown>;
}
interface NavigateActionConfig extends BaseActionConfig {
    action: "navigate";
    navigation_path: string;
    navigation_replace?: boolean;
}
interface UrlActionConfig extends BaseActionConfig {
    action: "url";
    url_path: string;
}
interface MoreInfoActionConfig extends BaseActionConfig {
    action: "more-info";
    entity?: string;
}
interface AssistActionConfig extends BaseActionConfig {
    action: "assist";
    pipeline_id?: string;
    start_listening?: boolean;
}
interface NoActionConfig extends BaseActionConfig {
    action: "none";
}
interface CustomActionConfig extends BaseActionConfig {
    action: "fire-dom-event";
}
interface BaseActionConfig {
    action: string;
    confirmation?: ConfirmationRestrictionConfig;
}
interface ConfirmationRestrictionConfig {
    text?: string;
    title?: string;
    confirm_text?: string;
    dismiss_text?: string;
    exemptions?: RestrictionConfig[];
}
interface RestrictionConfig {
    user: string;
}
type ActionConfig = ToggleActionConfig | CallServiceActionConfig | NavigateActionConfig | UrlActionConfig | MoreInfoActionConfig | AssistActionConfig | NoActionConfig | CustomActionConfig;

type UiAction = Exclude<ActionConfig["action"], "fire-dom-event">;
interface ActionRelatedContext {
    entity_id?: string;
    area_id?: string;
}
declare class HuiActionEditor extends LitElement {
    config?: ActionConfig;
    label?: string;
    actions?: UiAction[];
    defaultAction?: UiAction;
    tooltipText?: string;
    hass?: HomeAssistant;
    required?: boolean;
    context?: ActionRelatedContext;
    get _navigation_path(): string;
    get _url_path(): string;
    get _service(): string;
    private _serviceAction;
    private _navigateSchema;
    protected render(): typeof nothing | lit_html.TemplateResult<1>;
    private _actionPicked;
    private _valueChanged;
    private _formValueChanged;
    private _computeFormLabel;
    private _serviceValueChanged;
    static styles: lit.CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-action-editor": HuiActionEditor;
    }
}

type ThresholdMode = "crossed" | "changed" | "is";
type Selector = ActionSelector | AddonSelector | AppSelector | AreaSelector | AreasDisplaySelector | AttributeSelector | AutomationBehaviorSelector | BooleanSelector | ButtonToggleSelector | ChooseSelector | ColorRGBSelector | ColorTempSelector | ConditionSelector | ConversationAgentSelector | ConfigEntrySelector | ConstantSelector | CountrySelector | DateSelector | DateTimeSelector | DeviceSelector | FloorSelector | LegacyDeviceSelector | DurationSelector | EntitySelector | EntityNameSelector | LegacyEntitySelector | FileSelector | IconSelector | LabelSelector | LanguageSelector | LocationSelector | MediaSelector | NavigationSelector | NumberSelector | NumericThresholdSelector | ObjectSelector | PeriodSelector | AssistPipelineSelector | QRCodeSelector | SelectSelector | SelectorSelector | StateSelector | StatisticSelector | StringSelector | STTSelector | TargetSelector | TemplateSelector | ThemeSelector | TimeSelector | TimezoneSelector | TriggerSelector | TTSSelector | TTSVoiceSelector | SerialPortSelector | UiActionSelector | UiColorSelector | UiStateContentSelector | BackupLocationSelector;
interface ActionSelector {
    action: {
        optionsInSidebar?: boolean;
    } | null;
}
interface AddonSelector {
    addon: AppSelector["app"];
}
interface AppSelector {
    app: {
        name?: string;
        slug?: string;
    } | null;
}
interface AreaSelector {
    area: {
        entity?: EntitySelectorFilter | readonly EntitySelectorFilter[];
        device?: DeviceSelectorFilter | readonly DeviceSelectorFilter[];
        multiple?: boolean;
        reorder?: boolean;
    } | null;
}
interface AreasDisplaySelector {
    areas_display: {} | null;
}
interface AttributeSelector {
    attribute: {
        entity_id?: string | string[];
        hide_attributes?: readonly string[];
    } | null;
}
interface BooleanSelector {
    boolean: {} | null;
}
interface AutomationBehaviorSelector {
    automation_behavior: {
        mode: "trigger" | "condition";
        translation_key?: string;
    } | null;
}
interface ButtonToggleSelector {
    button_toggle: {
        options: readonly string[] | readonly SelectOption[];
        translation_key?: string;
        sort?: boolean;
    } | null;
}
interface ChooseSelector {
    choose: {
        choices: Record<string, {
            selector: Selector;
        }>;
        translation_key?: string;
    };
}
interface ColorRGBSelector {
    color_rgb: {} | null;
}
interface ColorTempSelector {
    color_temp: {
        unit?: "kelvin" | "mired";
        min?: number;
        max?: number;
        min_mireds?: number;
        max_mireds?: number;
    } | null;
}
interface ConditionSelector {
    condition: {
        optionsInSidebar?: boolean;
    } | null;
}
interface ConversationAgentSelector {
    conversation_agent: {
        language?: string;
    } | null;
}
interface ConfigEntrySelector {
    config_entry: {
        integration?: string;
    } | null;
}
interface ConstantSelector {
    constant: {
        value: string | number | boolean;
        label?: string;
        translation_key?: string;
    } | null;
}
interface CountrySelector {
    country: {
        countries: string[];
        no_sort?: boolean;
    } | null;
}
interface DateSelector {
    date: {} | null;
}
interface DateTimeSelector {
    datetime: {} | null;
}
interface DeviceSelectorFilter {
    integration?: string;
    manufacturer?: string;
    model?: string;
    model_id?: string;
}
interface DeviceSelector {
    device: {
        filter?: DeviceSelectorFilter | readonly DeviceSelectorFilter[];
        entity?: EntitySelectorFilter | readonly EntitySelectorFilter[];
        multiple?: boolean;
    } | null;
}
interface FloorSelector {
    floor: {
        entity?: EntitySelectorFilter | readonly EntitySelectorFilter[];
        device?: DeviceSelectorFilter | readonly DeviceSelectorFilter[];
        multiple?: boolean;
    } | null;
}
interface LegacyDeviceSelector {
    device: DeviceSelector["device"] & {
        /**
         * @deprecated Use filter instead
         */
        integration?: DeviceSelectorFilter["integration"];
        /**
         * @deprecated Use filter instead
         */
        manufacturer?: DeviceSelectorFilter["manufacturer"];
        /**
         * @deprecated Use filter instead
         */
        model?: DeviceSelectorFilter["model"];
    };
}
interface DurationSelector {
    duration: {
        enable_day?: boolean;
        enable_millisecond?: boolean;
        allow_negative?: boolean;
        enable_second?: boolean;
    } | null;
}
interface EntitySelectorFilter {
    integration?: string;
    domain?: string | readonly string[];
    device_class?: string | readonly string[];
    supported_features?: number | [number];
    unit_of_measurement?: string | readonly string[];
}
interface EntitySelectorExtraOption {
    id: string;
    primary: string;
    secondary?: string;
    icon?: string;
    icon_path?: string;
    entity_id?: string;
    hide_clear?: boolean;
}
interface EntitySelector {
    entity: {
        multiple?: boolean;
        include_entities?: string[];
        exclude_entities?: string[];
        filter?: EntitySelectorFilter | readonly EntitySelectorFilter[];
        reorder?: boolean;
        extra_options?: EntitySelectorExtraOption[];
    } | null;
}
interface LegacyEntitySelector {
    entity: EntitySelector["entity"] & {
        /**
         * @deprecated Use filter instead
         */
        integration?: EntitySelectorFilter["integration"];
        /**
         * @deprecated Use filter instead
         */
        domain?: EntitySelectorFilter["domain"];
        /**
         * @deprecated Use filter instead
         */
        device_class?: EntitySelectorFilter["device_class"];
    };
}
interface StatisticSelector {
    statistic: {
        device_class?: string;
        multiple?: boolean;
    };
}
interface FileSelector {
    file: {
        accept: string;
    } | null;
}
interface IconSelector {
    icon: {
        placeholder?: string;
        fallbackPath?: string;
    } | null;
}
interface LabelSelector {
    label: {
        multiple?: boolean;
    };
}
interface LanguageSelector {
    language: {
        languages?: string[];
        native_name?: boolean;
        no_sort?: boolean;
    } | null;
}
interface TimezoneSelector {
    timezone: {} | null;
}
interface LocationSelector {
    location: {
        radius?: boolean;
        radius_readonly?: boolean;
        icon?: string;
    } | null;
}
interface MediaSelector {
    media: {
        accept?: string[];
        image_upload?: boolean;
        clearable?: boolean;
        hide_content_type?: boolean;
        content_id_helper?: string;
    } | null;
}
interface MediaSelectorValue {
    entity_id?: string;
    media_content_id?: string;
    media_content_type?: string;
    metadata?: {
        title?: string;
        thumbnail?: string | null;
        media_class?: string;
        children_media_class?: string | null;
        navigateIds?: {
            media_content_type: string;
            media_content_id: string;
        }[];
        browse_entity_id?: string;
    };
}
interface NavigationSelector {
    navigation: ActionRelatedContext | null;
}
interface NumberSelector {
    number: {
        min?: number;
        max?: number;
        step?: number | "any";
        mode?: "box" | "slider";
        unit_of_measurement?: string;
        slider_ticks?: boolean;
        translation_key?: string;
    } | null;
}
interface NumericThresholdSelector {
    numeric_threshold: {
        mode?: ThresholdMode;
        unit_of_measurement?: readonly string[];
        number?: NumberSelector["number"];
        entity?: EntitySelectorFilter | readonly EntitySelectorFilter[];
    } | null;
}
interface ObjectSelectorField {
    selector: Selector;
    label?: string;
    description?: string;
    required?: boolean;
}
interface ObjectSelector {
    object?: {
        label_field?: string;
        description_field?: string;
        translation_key?: string;
        fields?: Record<string, ObjectSelectorField>;
        multiple?: boolean;
    } | null;
}
type PeriodKey = "today" | "yesterday" | "tomorrow" | "this_week" | "last_week" | "next_week" | "this_month" | "last_month" | "next_month" | "this_year" | "last_year" | "next_7d" | "next_30d" | "none";
interface PeriodSelector {
    period: {
        options: readonly PeriodKey[];
    } | null;
}
interface AssistPipelineSelector {
    assist_pipeline: {
        include_last_used?: boolean;
    } | null;
}
interface SelectBoxOptionImage {
    src: string;
    src_dark?: string;
    flip_rtl?: boolean;
}
interface SelectOption {
    value: string;
    label: string;
    description?: string;
    image?: string | SelectBoxOptionImage;
    disabled?: boolean;
}
interface SelectSelector {
    select: {
        multiple?: boolean;
        custom_value?: boolean;
        mode?: "list" | "dropdown" | "box";
        options: readonly string[] | readonly SelectOption[];
        translation_key?: string;
        sort?: boolean;
        reorder?: boolean;
        box_max_columns?: number;
    } | null;
}
interface SelectorSelector {
    selector: {} | null;
}
interface SerialPortSelector {
    serial_port: {
        extra_recommended_domains?: string[];
    } | null;
}
interface StateSelector {
    state: {
        extra_options?: {
            label: string;
            value: any;
        }[];
        entity_id?: string | string[];
        attribute?: string;
        hide_states?: string[];
        multiple?: boolean;
    } | null;
}
interface BackupLocationSelector {
    backup_location: {} | null;
}
interface QRCodeSelector {
    qr_code: {
        data: string;
        scale?: number;
        error_correction_level?: "low" | "medium" | "quartile" | "high";
        center_image?: string;
    } | null;
}
interface StringSelector {
    text: {
        multiline?: boolean;
        type?: "number" | "text" | "search" | "tel" | "url" | "email" | "password" | "date" | "month" | "week" | "time" | "datetime-local" | "color";
        prefix?: string;
        suffix?: string;
        placeholder?: string;
        autocomplete?: string;
        multiple?: true;
    } | null;
}
interface STTSelector {
    stt: {
        language?: string;
    } | null;
}
interface TargetSelector {
    target: {
        entity?: EntitySelectorFilter | readonly EntitySelectorFilter[];
        device?: DeviceSelectorFilter | readonly DeviceSelectorFilter[];
        primary_entities_only?: boolean;
    } | null;
}
interface TemplateSelector {
    template: {
        preview?: boolean;
    } | null;
}
interface ThemeSelector {
    theme: {
        include_default?: boolean;
    } | null;
}
interface TimeSelector {
    time: {
        no_second?: boolean;
    } | null;
}
interface TriggerSelector {
    trigger: {} | null;
}
interface TTSSelector {
    tts: {
        language?: string;
    } | null;
}
interface TTSVoiceSelector {
    tts_voice: {
        engineId?: string;
        language?: string;
    } | null;
}
interface UiActionSelector {
    ui_action: {
        actions?: UiAction[];
        default_action?: UiAction;
    } | null;
}
interface UiColorExtraOption {
    value: string;
    label: string;
    icon?: string;
    display_color?: string;
}
interface UiColorSelector {
    ui_color: {
        default_color?: string;
        include_none?: boolean;
        include_state?: boolean;
        extra_options?: UiColorExtraOption[];
    } | null;
}
interface UiStateContentSelector {
    ui_state_content: {
        entity_id?: string;
        allow_name?: boolean;
        allow_context?: boolean;
    } | null;
}
interface EntityNameSelector {
    entity_name: {
        entity_id?: string;
        default_name?: EntityNameItem | EntityNameItem[] | string;
    } | null;
}

interface BlueprintInput {
    name?: string;
    description?: string;
    selector?: Selector;
    default?: any;
}

declare class HaBaseTimeInput extends LitElement {
    /**
     * Label for the input
     */
    label?: string;
    /**
     * Helper for the input
     */
    helper?: string;
    /**
     * auto validate time inputs
     */
    autoValidate: boolean;
    /**
     * determines if inputs are required
     */
    required: boolean;
    /**
     * 12 or 24 hr format
     */
    format: 12 | 24;
    /**
     * disables the inputs
     */
    disabled: boolean;
    /**
     * day
     */
    days: number;
    /**
     * hour
     */
    hours: number;
    /**
     * minute
     */
    minutes: number;
    /**
     * second
     */
    seconds: number;
    /**
     * milli second
     */
    milliseconds: number;
    /**
     * Label for the day input
     */
    dayLabel: string;
    /**
     * Label for the hour input
     */
    hourLabel: string;
    /**
     * Label for the min input
     */
    minLabel: string;
    /**
     * Label for the sec input
     */
    secLabel: string;
    /**
     * Label for the milli sec input
     */
    millisecLabel: string;
    /**
     * show the sec field
     */
    enableSecond: boolean;
    /**
     * show the milli sec field
     */
    enableMillisecond: boolean;
    /**
     * show the day field
     */
    enableDay: boolean;
    /**
     * limit hours input
     */
    noHoursLimit: boolean;
    /**
     * AM or PM
     */
    amPm: "AM" | "PM";
    clearable?: boolean;
    placeholderLabels: boolean;
    private _inputs?;
    static shadowRootOptions: {
        delegatesFocus: boolean;
        clonable?: boolean;
        customElementRegistry?: CustomElementRegistry | null;
        mode: ShadowRootMode;
        serializable?: boolean;
        slotAssignment?: SlotAssignmentMode;
    };
    reportValidity(): boolean;
    protected render(): TemplateResult;
    private _clearValue;
    private _valueChanged;
    private _onFocus;
    /**
     * Format time fragments
     */
    private _formatValue;
    /**
     * 24 hour format has a max hr of 23
     */
    private get _hourMax();
    static styles: lit.CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-base-time-input": HaBaseTimeInput;
    }
}

/**
 * @element ha-button-toggle-group
 *
 * @summary
 * A button-group with one active selection.
 *
 * @attr {ToggleButton[]} buttons - the button config
 * @attr {string} active - The value of the currently active button.
 * @attr {("small"|"medium")} size - The size of the buttons in the group.
 * @attr {("brand"|"neutral"|"success"|"warning"|"danger")} variant - The variant of the buttons in the group.
 *
 * @fires value-changed - Dispatched when the active button changes.
 */
declare class HaButtonToggleGroup extends LitElement {
    buttons: ToggleButton[];
    active?: string;
    size: "small" | "medium";
    nowrap: boolean;
    fullWidth: boolean;
    variant: "brand" | "neutral" | "success" | "warning" | "danger";
    activeVariant?: "brand" | "neutral" | "success" | "warning" | "danger";
    protected render(): TemplateResult;
    private _handleClick;
    static styles: lit.CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-button-toggle-group": HaButtonToggleGroup;
    }
}

interface HaDurationData {
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
    milliseconds?: number;
}
declare class HaDurationInput extends LitElement {
    data?: HaDurationData;
    label?: string;
    helper?: string;
    required: boolean;
    enableMillisecond: boolean;
    enableDay: boolean;
    allowNegative: boolean;
    enableSecond: boolean;
    disabled: boolean;
    private _input?;
    private _toggleNegative;
    static shadowRootOptions: {
        delegatesFocus: boolean;
        clonable?: boolean;
        customElementRegistry?: CustomElementRegistry | null;
        mode: ShadowRootMode;
        serializable?: boolean;
        slotAssignment?: SlotAssignmentMode;
    };
    reportValidity(): boolean;
    protected render(): TemplateResult;
    private get _negative();
    private get _days();
    private get _hours();
    private get _minutes();
    private get _seconds();
    private get _milliseconds();
    private _durationChanged;
    private _negativeChanged;
    static styles: lit.CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-duration-input": HaDurationInput;
    }
}

type HaFormSchema = HaFormConstantSchema | HaFormStringSchema | HaFormIntegerSchema | HaFormFloatSchema | HaFormBooleanSchema | HaFormSelectSchema | HaFormMultiSelectSchema | HaFormTimeSchema | HaFormSelector | HaFormGridSchema | HaFormExpandableSchema | HaFormOptionalActionsSchema;
interface HaFormBaseSchema {
    name: string;
    default?: HaFormData;
    required?: boolean;
    disabled?: boolean;
    description?: {
        suffix?: string;
        suggested_value?: HaFormData;
    };
    context?: Record<string, string>;
}
interface HaFormGridSchema extends HaFormBaseSchema {
    type: "grid";
    flatten?: boolean;
    column_min_width?: string;
    schema: readonly HaFormSchema[];
}
interface HaFormExpandableSchema extends HaFormBaseSchema {
    type: "expandable";
    flatten?: boolean;
    title?: string;
    icon?: string;
    iconPath?: string;
    expanded?: boolean;
    headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
    schema: readonly HaFormSchema[];
}
interface HaFormOptionalActionsSchema extends HaFormBaseSchema {
    type: "optional_actions";
    flatten?: boolean;
    schema: readonly HaFormSchema[];
}
interface HaFormSelector extends HaFormBaseSchema {
    type?: never;
    selector: Selector;
}
interface HaFormConstantSchema extends HaFormBaseSchema {
    type: "constant";
    value?: string;
}
interface HaFormIntegerSchema extends HaFormBaseSchema {
    type: "integer";
    default?: HaFormIntegerData;
    valueMin?: number;
    valueMax?: number;
}
interface HaFormSelectSchema extends HaFormBaseSchema {
    type: "select";
    options: readonly (readonly [string, string])[];
}
interface HaFormMultiSelectSchema extends HaFormBaseSchema {
    type: "multi_select";
    options: Record<string, string> | readonly string[] | readonly (readonly [string, string])[];
}
interface HaFormFloatSchema extends HaFormBaseSchema {
    type: "float";
}
interface HaFormStringSchema extends HaFormBaseSchema {
    type: "string";
    format?: string;
    autocomplete?: string;
    autofocus?: boolean;
}
interface HaFormBooleanSchema extends HaFormBaseSchema {
    type: "boolean";
}
interface HaFormTimeSchema extends HaFormBaseSchema {
    type: "positive_time_period_dict";
}
type SchemaUnion<SchemaArray extends readonly HaFormSchema[], Schema = SchemaArray[number]> = Schema extends HaFormGridSchema | HaFormExpandableSchema | HaFormOptionalActionsSchema ? SchemaUnion<Schema["schema"]> | Schema : Schema;
type HaFormDataContainer = Record<string, HaFormData>;
type HaFormData = HaFormStringData | HaFormIntegerData | HaFormFloatData | HaFormBooleanData | HaFormSelectData | HaFormMultiSelectData | HaFormTimeData;
type HaFormStringData = string;
type HaFormIntegerData = number;
type HaFormFloatData = number;
type HaFormBooleanData = boolean;
type HaFormSelectData = string;
type HaFormMultiSelectData = string[];
type HaFormTimeData = HaDurationData;
interface HaFormElement extends LitElement {
    schema: HaFormSchema | readonly HaFormSchema[];
    data?: HaFormDataContainer | HaFormData;
    label?: string;
}

interface DeviceAutomation {
    alias?: string;
    note?: string;
    device_id: string;
    domain: string;
    entity_id?: string;
    type?: string;
    subtype?: string;
    event?: string;
    enabled?: boolean;
    metadata?: {
        secondary: boolean;
    };
}
interface DeviceCondition extends DeviceAutomation {
    condition: "device";
}
type DeviceTrigger = DeviceAutomation & BaseTrigger & {
    trigger: "device";
};

type AutomationConfig = ManualAutomationConfig | BlueprintAutomationConfig;
interface ManualAutomationConfig {
    id?: string;
    alias?: string;
    description?: string;
    triggers: Trigger | Trigger[];
    /** @deprecated Use `triggers` instead */
    trigger?: Trigger | Trigger[];
    conditions?: Condition$1 | Condition$1[];
    /** @deprecated Use `conditions` instead */
    condition?: Condition$1 | Condition$1[];
    actions: Action | Action[];
    /** @deprecated Use `actions` instead */
    action?: Action | Action[];
    mode?: (typeof MODES)[number];
    max?: number;
    max_exceeded?: "silent" | "critical" | "fatal" | "error" | "warning" | "warn" | "info" | "debug" | "notset";
    variables?: Record<string, unknown>;
}
interface BlueprintAutomationConfig extends ManualAutomationConfig {
    use_blueprint: {
        path: string;
        input?: BlueprintInput;
    };
}
interface ForDict {
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
    milliseconds?: number;
}
interface ContextConstraint {
    context_id?: string;
    parent_id?: string;
    user_id?: string | string[];
}
interface TriggerList {
    triggers: Trigger | Trigger[] | undefined;
}
interface BaseTrigger {
    alias?: string;
    note?: string;
    /** @deprecated Use `trigger` instead */
    platform?: string;
    trigger: string;
    id?: string;
    variables?: Record<string, unknown>;
    enabled?: boolean;
    options?: Record<string, unknown>;
}
interface PlatformTrigger extends BaseTrigger {
    trigger: Exclude<string, LegacyTrigger["trigger"]>;
    target?: HassServiceTarget;
}
interface StateTrigger extends BaseTrigger {
    trigger: "state";
    entity_id: string | string[];
    attribute?: string;
    from?: string | string[];
    to?: string | string[];
    for?: string | number | ForDict;
}
interface GeoLocationTrigger extends BaseTrigger {
    trigger: "geo_location";
    source: string;
    zone: string;
    event: "enter" | "leave";
}
interface MqttTrigger extends BaseTrigger {
    trigger: "mqtt";
    topic: string;
    payload?: string;
}
interface HassTrigger extends BaseTrigger {
    trigger: "homeassistant";
    event: "start" | "shutdown";
}
interface NumericStateTrigger extends BaseTrigger {
    trigger: "numeric_state";
    entity_id: string | string[];
    attribute?: string;
    above?: number;
    below?: number;
    value_template?: string;
    for?: string | number | ForDict;
}
interface ConversationTrigger extends BaseTrigger {
    trigger: "conversation";
    command: string | string[];
}
interface SunTrigger extends BaseTrigger {
    trigger: "sun";
    offset: number;
    event: "sunrise" | "sunset";
}
interface TimePatternTrigger extends BaseTrigger {
    trigger: "time_pattern";
    hours?: number | string;
    minutes?: number | string;
    seconds?: number | string;
}
interface WebhookTrigger extends BaseTrigger {
    trigger: "webhook";
    webhook_id: string;
    allowed_methods?: string[];
    local_only?: boolean;
}
interface PersistentNotificationTrigger extends BaseTrigger {
    trigger: "persistent_notification";
    notification_id?: string;
    update_type?: string[];
}
interface ZoneTrigger extends BaseTrigger {
    trigger: "zone";
    entity_id: string;
    zone: string;
    event: "enter" | "leave";
}
interface TagTrigger extends BaseTrigger {
    trigger: "tag";
    tag_id: string;
    device_id?: string;
}
interface TimeTrigger extends BaseTrigger {
    trigger: "time";
    at: string | {
        entity_id: string;
        offset?: string;
    };
    weekday?: string | string[];
}
interface TemplateTrigger extends BaseTrigger {
    trigger: "template";
    value_template: string;
    for?: string | number | ForDict;
}
interface EventTrigger extends BaseTrigger {
    trigger: "event";
    event_type: string;
    event_data?: any;
    context?: ContextConstraint;
}
interface CalendarTrigger extends BaseTrigger {
    trigger: "calendar";
    event: "start" | "end";
    entity_id: string;
    offset: string;
}
type LegacyTrigger = StateTrigger | MqttTrigger | GeoLocationTrigger | HassTrigger | NumericStateTrigger | SunTrigger | ConversationTrigger | TimePatternTrigger | WebhookTrigger | PersistentNotificationTrigger | ZoneTrigger | TagTrigger | TimeTrigger | TemplateTrigger | EventTrigger | DeviceTrigger | CalendarTrigger;
type Trigger = LegacyTrigger | TriggerList | PlatformTrigger;
interface BaseCondition$1 {
    condition: string;
    alias?: string;
    note?: string;
    enabled?: boolean;
    options?: Record<string, unknown>;
}
interface PlatformCondition extends BaseCondition$1 {
    condition: Exclude<string, LegacyCondition$1["condition"]>;
    target?: HassServiceTarget;
}
interface LogicalCondition extends BaseCondition$1 {
    condition: "and" | "not" | "or";
    conditions: Condition$1 | Condition$1[];
}
interface StateCondition$1 extends BaseCondition$1 {
    condition: "state";
    entity_id: string;
    attribute?: string;
    state: string | number | string[];
    for?: string | number | ForDict;
    match?: "all" | "any";
}
interface NumericStateCondition$1 extends BaseCondition$1 {
    condition: "numeric_state";
    entity_id: string;
    attribute?: string;
    above?: string | number;
    below?: string | number;
    value_template?: string;
}
interface SunCondition extends BaseCondition$1 {
    condition: "sun";
    after_offset?: number;
    before_offset?: number;
    after?: "sunrise" | "sunset";
    before?: "sunrise" | "sunset";
}
interface ZoneCondition extends BaseCondition$1 {
    condition: "zone";
    entity_id: string;
    zone: string;
}
interface TimeCondition$1 extends BaseCondition$1 {
    condition: "time";
    after?: string;
    before?: string;
    weekday?: WeekdayShort | WeekdayShort[];
}
interface TemplateCondition extends BaseCondition$1 {
    condition: "template";
    value_template: string;
}
interface TriggerCondition extends BaseCondition$1 {
    condition: "trigger";
    id: string;
}
type ShorthandBaseCondition = Omit<BaseCondition$1, "condition">;
interface ShorthandAndCondition extends ShorthandBaseCondition {
    and: Condition$1[];
}
interface ShorthandOrCondition extends ShorthandBaseCondition {
    or: Condition$1[];
}
interface ShorthandNotCondition extends ShorthandBaseCondition {
    not: Condition$1[];
}
type LegacyCondition$1 = StateCondition$1 | NumericStateCondition$1 | SunCondition | ZoneCondition | TimeCondition$1 | TemplateCondition | DeviceCondition | LogicalCondition | TriggerCondition;
type Condition$1 = LegacyCondition$1 | PlatformCondition;

interface CommandInFlight {
    resolve: (data: any) => void;
    reject: (err: EMError) => void;
}
interface EMMessage {
    id?: number;
    type: string;
}
interface EMError {
    code: string;
    message: string;
}
interface EMMessageResultSuccess {
    id: number;
    type: "result";
    success: true;
    result: unknown;
}
interface EMMessageResultError {
    id: number;
    type: "result";
    success: false;
    error: EMError;
}
interface EMOutgoingMessageConfigGet extends EMMessage {
    type: "config/get";
}
interface EMOutgoingMessageEntityAddToGetActions extends EMMessage {
    type: "entity/add_to/get_actions";
    payload: {
        entity_id: string;
    };
}
interface EMOutgoingMessageBarCodeScan extends EMMessage {
    type: "bar_code/scan";
    payload: {
        title: string;
        description: string;
        alternative_option_label?: string;
    };
}
interface EMOutgoingMessageBarCodeClose extends EMMessage {
    type: "bar_code/close";
}
interface EMOutgoingMessageBarCodeNotify extends EMMessage {
    type: "bar_code/notify";
    payload: {
        message: string;
    };
}
interface EMOutgoingMessageMatterCommission extends EMMessage {
    type: "matter/commission";
    payload?: {
        mac_extended_address: string | null;
        extended_pan_id: string | null;
        border_agent_id: string | null;
        active_operational_dataset: string | null;
    };
}
interface EMOutgoingMessageImportThreadCredentials extends EMMessage {
    type: "thread/import_credentials";
}
interface EMOutgoingMessageWithAnswer {
    "config/get": {
        request: EMOutgoingMessageConfigGet;
        response: ExternalConfig;
    };
    "entity/add_to/get_actions": {
        request: EMOutgoingMessageEntityAddToGetActions;
        response: ExternalEntityAddToActions;
    };
}
interface EMOutgoingMessageExoplayerPlayHLS extends EMMessage {
    type: "exoplayer/play_hls";
    payload: {
        url: string;
        muted: boolean;
    };
}
interface EMOutgoingMessageExoplayerResize extends EMMessage {
    type: "exoplayer/resize";
    payload: {
        left: number;
        top: number;
        right: number;
        bottom: number;
    };
}
interface EMOutgoingMessageExoplayerStop extends EMMessage {
    type: "exoplayer/stop";
}
interface EMOutgoingMessageThemeUpdate extends EMMessage {
    type: "theme-update";
}
interface EMOutgoingMessageHaptic extends EMMessage {
    type: "haptic";
    payload: {
        hapticType: string;
    };
}
interface EMOutgoingMessageConnectionStatus extends EMMessage {
    type: "connection-status";
    payload: {
        event: string;
    };
}
interface EMOutgoingMessageAppConfiguration extends EMMessage {
    type: "config_screen/show";
}
interface EMOutgoingMessageTagWrite extends EMMessage {
    type: "tag/write";
    payload: {
        name: string | null;
        tag: string;
    };
}
interface EMOutgoingMessageSidebarShow extends EMMessage {
    type: "sidebar/show";
}
interface EMOutgoingMessageAssistShow extends EMMessage {
    type: "assist/show";
    payload?: {
        pipeline_id: "preferred" | "last_used" | string;
        start_listening: boolean;
    };
}
interface EMOutgoingMessageAssistSettings extends EMMessage {
    type: "assist/settings";
}
interface EMOutgoingMessageImprovScan extends EMMessage {
    type: "improv/scan";
}
interface EMOutgoingMessageImprovConfigureDevice extends EMMessage {
    type: "improv/configure_device";
    payload: {
        name: string;
    };
}
interface EMOutgoingMessageThreadStoreInPlatformKeychain extends EMMessage {
    type: "thread/store_in_platform_keychain";
    payload: {
        mac_extended_address: string | null;
        border_agent_id: string | null;
        active_operational_dataset: string;
        extended_pan_id: string;
    };
}
interface EMOutgoingMessageAddEntityTo extends EMMessage {
    type: "entity/add_to";
    payload: {
        entity_id: string;
        app_payload: string;
    };
}
interface EMOutgoingMessageFocusElement extends EMMessage {
    type: "focus_element";
    payload: {
        element_id: string;
    };
}
type RejectedEMMessageType = "onHomeAssistantSetTheme" | "handleBlob";
type EMOutgoingMessageWithoutAnswer = EMMessageResultError | EMMessageResultSuccess | EMOutgoingMessageAppConfiguration | EMOutgoingMessageAssistShow | EMOutgoingMessageBarCodeClose | EMOutgoingMessageBarCodeNotify | EMOutgoingMessageBarCodeScan | EMOutgoingMessageConnectionStatus | EMOutgoingMessageExoplayerPlayHLS | EMOutgoingMessageExoplayerResize | EMOutgoingMessageExoplayerStop | EMOutgoingMessageHaptic | EMOutgoingMessageImportThreadCredentials | EMOutgoingMessageMatterCommission | EMOutgoingMessageSidebarShow | EMOutgoingMessageTagWrite | EMOutgoingMessageThemeUpdate | EMOutgoingMessageThreadStoreInPlatformKeychain | EMOutgoingMessageImprovScan | EMOutgoingMessageImprovConfigureDevice | EMOutgoingMessageAddEntityTo | EMOutgoingMessageFocusElement | EMOutgoingMessageAssistSettings;
interface EMIncomingMessageRestart {
    id: number;
    type: "command";
    command: "restart";
}
interface EMIncomingMessageNavigate {
    id: number;
    type: "command";
    command: "navigate";
    payload: {
        path: string;
        options?: NavigateOptions;
    };
}
interface EMIncomingMessageShowNotifications {
    id: number;
    type: "command";
    command: "notifications/show";
}
interface EMIncomingMessageToggleSidebar {
    id: number;
    type: "command";
    command: "sidebar/toggle";
}
interface EMIncomingMessageShowSidebar {
    id: number;
    type: "command";
    command: "sidebar/show";
}
interface EMIncomingMessageShowAutomationEditor {
    id: number;
    type: "command";
    command: "automation/editor/show";
    payload?: {
        config?: Partial<AutomationConfig>;
    };
}
interface EMIncomingMessageBarCodeScanResult {
    id: number;
    type: "command";
    command: "bar_code/scan_result";
    payload: {
        rawValue: string;
        format: "aztec" | "code_128" | "code_39" | "code_93" | "codabar" | "data_matrix" | "ean_13" | "ean_8" | "itf" | "pdf417" | "qr_code" | "upc_a" | "upc_e" | "unknown";
    };
}
interface EMIncomingMessageBarCodeScanAborted {
    id: number;
    type: "command";
    command: "bar_code/aborted";
    payload: {
        reason: "canceled" | "alternative_options";
    };
}
interface ImprovDiscoveredDevice {
    name: string;
}
interface EMIncomingMessageImprovDeviceDiscovered extends EMMessage {
    id: number;
    type: "command";
    command: "improv/discovered_device";
    payload: ImprovDiscoveredDevice;
}
interface EMIncomingMessageImprovDeviceSetupDone extends EMMessage {
    id: number;
    type: "command";
    command: "improv/device_setup_done";
}
interface EMIncomingMessageKioskModeSet {
    id: number;
    type: "command";
    command: "kiosk_mode/set";
    payload: {
        enable: boolean;
    };
}
type EMIncomingMessageCommands = EMIncomingMessageRestart | EMIncomingMessageNavigate | EMIncomingMessageShowNotifications | EMIncomingMessageToggleSidebar | EMIncomingMessageShowSidebar | EMIncomingMessageShowAutomationEditor | EMIncomingMessageBarCodeScanResult | EMIncomingMessageBarCodeScanAborted | EMIncomingMessageImprovDeviceDiscovered | EMIncomingMessageImprovDeviceSetupDone | EMIncomingMessageKioskModeSet;
type EMIncomingMessage = EMMessageResultSuccess | EMMessageResultError | EMIncomingMessageCommands;
type EMIncomingMessageHandler = (msg: EMIncomingMessageCommands) => boolean;
interface ExternalConfig {
    hasSettingsScreen?: boolean;
    hasSidebar?: boolean;
    canWriteTag?: boolean;
    hasExoPlayer?: boolean;
    canCommissionMatter?: boolean;
    canImportThreadCredentials?: boolean;
    canTransferThreadCredentialsToKeychain?: boolean;
    hasAssist?: boolean;
    hasBarCodeScanner?: number;
    canSetupImprov?: boolean;
    appVersion?: string;
    hasEntityAddTo?: boolean;
    hasAssistSettings?: boolean;
}
interface ExternalEntityAddToAction {
    enabled: boolean;
    name: string;
    details?: string;
    mdi_icon: string;
    app_payload: string;
}
interface ExternalEntityAddToActions {
    actions: ExternalEntityAddToAction[];
}
declare class ExternalMessaging {
    config: ExternalConfig;
    commands: Record<number, CommandInFlight>;
    msgId: number;
    private _commandHandler?;
    attach(): Promise<void>;
    addCommandHandler(handler: EMIncomingMessageHandler): void;
    /**
     * Send message to external app that expects a response.
     * @param msg message to send
     */
    sendMessage<T extends keyof EMOutgoingMessageWithAnswer, TType extends string = EMOutgoingMessageWithAnswer[T]["request"]["type"]>(msg: EMOutgoingMessageWithAnswer[T]["request"] & {
        type: TType & (TType extends RejectedEMMessageType ? "ERROR: message type is rejected" : {});
    }): Promise<EMOutgoingMessageWithAnswer[T]["response"]>;
    /**
     * Send message to external app without expecting a response.
     * @param msg message to send
     */
    fireMessage<T extends string>(msg: EMOutgoingMessageWithoutAnswer & {
        type: T & (T extends RejectedEMMessageType ? "ERROR: message type is rejected" : {});
    }): void;
    receiveMessage(msg: EMIncomingMessage): void;
    protected _sendExternal(msg: EMMessage): void;
}

interface LabelRegistryEntry extends RegistryEntry {
    label_id: string;
    name: string;
    icon: string | null;
    color: string | null;
    description: string | null;
}

/**
 * Entity, device, area, and floor registries
 */
declare const registriesContext: {
    __context__: HomeAssistantRegistries;
};
/**
 * Live map of all entity states, keyed by entity ID.
 */
declare const statesContext: {
    __context__: home_assistant_js_websocket.HassEntities;
};
/**
 * Provides the map of all available Home Assistant services, keyed by domain.
 */
declare const servicesContext: {
    __context__: home_assistant_js_websocket.HassServices;
};
/**
 * i18n state: active language, locale settings, the `localize` function, translation metadata, and the
 * `loadBackendTranslation` / `loadFragmentTranslation` loaders.
 */
declare const internationalizationContext: {
    __context__: HomeAssistantInternationalization;
};
/**
 * HTTP and WebSocket API surface: `callService`, `callApi`,
 * `callApiRaw`, `callWS`, `sendWS`, `fetchWithAuth`, and `hassUrl`.
 */
declare const apiContext: {
    __context__: HomeAssistantApi;
};
/**
 * WebSocket connection state: `connection`, `connected`, and `debugConnection`.
 */
declare const connectionContext: {
    __context__: HomeAssistantConnection;
};
/**
 * UI preferences and global UI state: themes, selected theme,
 * panels, sidebar mode, kiosk mode, shortcuts, vibration, and
 * `suspendWhenHidden`.
 */
declare const uiContext: {
    __context__: HomeAssistantUI;
};
/**
 * HA core configuration together with user session data:
 * `auth`, `config` (core HA config), `user`, `userData`, and `systemData`.
 */
declare const configContext: {
    __context__: HomeAssistantConfig;
};
/**
 * Entity formatting functions: `formatEntityState`, `formatEntityStateToParts`,
 * `formatEntityAttributeValue`, `formatEntityAttributeValueToParts`,
 * `formatEntityAttributeName`, and `formatEntityName`.
 */
declare const formattersContext: {
    __context__: HomeAssistantFormatters;
};
/**
 * Map of all entities in the entity registry, keyed by entity ID.
 */
declare const entitiesContext: {
    __context__: Record<string, EntityRegistryDisplayEntry>;
};
/**
 * Map of all devices in the device registry, keyed by device ID.
 */
declare const devicesContext: {
    __context__: Record<string, DeviceRegistryEntry>;
};
/**
 * Map of all areas in the area registry, keyed by area ID.
 */
declare const areasContext: {
    __context__: Record<string, AreaRegistryEntry>;
};
/**
 * Map of all floors in the floor registry, keyed by floor ID.
 */
declare const floorsContext: {
    __context__: Record<string, FloorRegistryEntry>;
};
/**
 * Lazy contexts are not subscribed to by default. They are only subscribed to when a provider is consumed with at least one consumer.
 */
/**
 * Lazy loaded labels registry, keyed by label ID.
 */
declare const labelsContext: {
    __context__: LabelRegistryEntry[];
};
/**
 * Lazy loaded entity registry array
 */
declare const fullEntitiesContext: {
    __context__: EntityRegistryEntry[];
};
/**
 * Lazy loaded config entries array
 */
declare const configEntriesContext: {
    __context__: ConfigEntry[];
};
/**
 * Lazy loaded integration manifests, keyed by domain.
 */
declare const manifestsContext: {
    __context__: DomainManifestLookup;
};
/** @deprecated Use `connectionContext` instead. */
declare const connectionSingleContext: {
    __context__: home_assistant_js_websocket.Connection;
};
/** @deprecated Use `internationalizationContext` instead. */
declare const localizeContext: {
    __context__: LocalizeFunc;
};
/** @deprecated Use `internationalizationContext` instead. */
declare const localeContext: {
    __context__: FrontendLocaleData;
};
/** @deprecated Use `configContext` instead. */
declare const configSingleContext: {
    __context__: HassConfig;
};
/** @deprecated Use `uiContext` instead. */
declare const themesContext: {
    __context__: Themes;
};
/** @deprecated Use `uiContext` instead. */
declare const selectedThemeContext: {
    __context__: ThemeSettings | null;
};
/** @deprecated Use `configContext` instead. */
declare const userContext: {
    __context__: CurrentUser | undefined;
};
/** @deprecated Use `configContext` instead. */
declare const userDataContext: {
    __context__: CoreFrontendUserData | undefined;
};
/** @deprecated Use `uiContext` instead. */
declare const panelsContext: {
    __context__: Panels;
};
/** @deprecated Use `configContext` instead. */
declare const authContext: {
    __context__: home_assistant_js_websocket.Auth & {
        external?: ExternalMessaging;
    };
};

declare const __data_context_index_apiContext: typeof apiContext;
declare const __data_context_index_areasContext: typeof areasContext;
declare const __data_context_index_authContext: typeof authContext;
declare const __data_context_index_configContext: typeof configContext;
declare const __data_context_index_configEntriesContext: typeof configEntriesContext;
declare const __data_context_index_configSingleContext: typeof configSingleContext;
declare const __data_context_index_connectionContext: typeof connectionContext;
declare const __data_context_index_connectionSingleContext: typeof connectionSingleContext;
declare const __data_context_index_devicesContext: typeof devicesContext;
declare const __data_context_index_entitiesContext: typeof entitiesContext;
declare const __data_context_index_floorsContext: typeof floorsContext;
declare const __data_context_index_formattersContext: typeof formattersContext;
declare const __data_context_index_fullEntitiesContext: typeof fullEntitiesContext;
declare const __data_context_index_internationalizationContext: typeof internationalizationContext;
declare const __data_context_index_labelsContext: typeof labelsContext;
declare const __data_context_index_localeContext: typeof localeContext;
declare const __data_context_index_localizeContext: typeof localizeContext;
declare const __data_context_index_manifestsContext: typeof manifestsContext;
declare const __data_context_index_panelsContext: typeof panelsContext;
declare const __data_context_index_registriesContext: typeof registriesContext;
declare const __data_context_index_selectedThemeContext: typeof selectedThemeContext;
declare const __data_context_index_servicesContext: typeof servicesContext;
declare const __data_context_index_statesContext: typeof statesContext;
declare const __data_context_index_themesContext: typeof themesContext;
declare const __data_context_index_uiContext: typeof uiContext;
declare const __data_context_index_userContext: typeof userContext;
declare const __data_context_index_userDataContext: typeof userDataContext;
declare namespace __data_context_index {
  export {
    __data_context_index_apiContext as apiContext,
    __data_context_index_areasContext as areasContext,
    __data_context_index_authContext as authContext,
    __data_context_index_configContext as configContext,
    __data_context_index_configEntriesContext as configEntriesContext,
    __data_context_index_configSingleContext as configSingleContext,
    __data_context_index_connectionContext as connectionContext,
    __data_context_index_connectionSingleContext as connectionSingleContext,
    __data_context_index_devicesContext as devicesContext,
    __data_context_index_entitiesContext as entitiesContext,
    __data_context_index_floorsContext as floorsContext,
    __data_context_index_formattersContext as formattersContext,
    __data_context_index_fullEntitiesContext as fullEntitiesContext,
    __data_context_index_internationalizationContext as internationalizationContext,
    __data_context_index_labelsContext as labelsContext,
    __data_context_index_localeContext as localeContext,
    __data_context_index_localizeContext as localizeContext,
    __data_context_index_manifestsContext as manifestsContext,
    __data_context_index_panelsContext as panelsContext,
    __data_context_index_registriesContext as registriesContext,
    __data_context_index_selectedThemeContext as selectedThemeContext,
    __data_context_index_servicesContext as servicesContext,
    __data_context_index_statesContext as statesContext,
    __data_context_index_themesContext as themesContext,
    __data_context_index_uiContext as uiContext,
    __data_context_index_userContext as userContext,
    __data_context_index_userDataContext as userDataContext,
  };
}

type Condition = ViewColumnsCondition | LocationCondition | NumericStateCondition | StateCondition | ScreenCondition | TimeCondition | UserCondition | OrCondition | AndCondition | NotCondition;
interface LegacyCondition {
    entity?: string;
    state?: string | string[];
    state_not?: string | string[];
}
interface BaseCondition {
    condition: string;
}
interface ViewColumnsCondition extends BaseCondition {
    condition: "view_columns";
    min?: number;
    max?: number;
}
interface LocationCondition extends BaseCondition {
    condition: "location";
    locations?: string[];
}
interface NumericStateCondition extends BaseCondition {
    condition: "numeric_state";
    entity?: string;
    attribute?: string;
    below?: string | number;
    above?: string | number;
}
interface StateCondition extends BaseCondition {
    condition: "state";
    entity?: string;
    attribute?: string;
    state?: string | string[];
    state_not?: string | string[];
}
interface ScreenCondition extends BaseCondition {
    condition: "screen";
    media_query?: string;
}
interface TimeCondition extends BaseCondition {
    condition: "time";
    after?: string;
    before?: string;
    weekdays?: WeekdayShort[];
}
interface UserCondition extends BaseCondition {
    condition: "user";
    users?: string[];
}
interface OrCondition extends BaseCondition {
    condition: "or";
    conditions?: Condition[];
}
interface AndCondition extends BaseCondition {
    condition: "and";
    conditions?: Condition[];
}
interface NotCondition extends BaseCondition {
    condition: "not";
    conditions?: Condition[];
}

declare global {
    interface HASSDomEvents {
    }
}
interface HASSDomEvent<T> extends Event {
    detail: T;
}

interface ActionHandlerOptions {
    hasTap?: boolean;
    hasHold?: boolean;
    hasDoubleClick?: boolean;
    disabled?: boolean;
}
interface ActionHandlerDetail {
    action: "hold" | "tap" | "double_tap";
}
type ActionHandlerEvent = HASSDomEvent<ActionHandlerDetail>;

type LovelaceDashboard = LovelaceYamlDashboard | LovelaceStorageDashboard;
interface LovelaceGenericDashboard {
    id: string;
    url_path: string;
    require_admin: boolean;
    show_in_sidebar: boolean;
    icon?: string;
    title: string;
}
interface LovelaceYamlDashboard extends LovelaceGenericDashboard {
    mode: "yaml";
    filename: string;
}
interface LovelaceStorageDashboard extends LovelaceGenericDashboard {
    mode: "storage";
}
interface LovelaceDashboardMutableParams {
    require_admin: boolean;
    show_in_sidebar: boolean;
    icon?: string;
    title: string;
}
interface LovelaceDashboardCreateParams extends LovelaceDashboardMutableParams {
    url_path: string;
    mode: "storage";
}
/** Optional suggested values for dashboard creation (for example from a strategy). */
interface LovelaceDashboardSuggestions {
    title?: string;
    icon?: string;
}
declare const fetchDashboards: (hass: HomeAssistant) => Promise<LovelaceDashboard[]>;
declare const createDashboard: (hass: HomeAssistant, values: LovelaceDashboardCreateParams) => Promise<LovelaceDashboard>;
declare const updateDashboard: (hass: HomeAssistant, id: string, updates: Partial<LovelaceDashboardMutableParams>) => Promise<LovelaceDashboard>;
declare const deleteDashboard: (hass: HomeAssistant, id: string) => Promise<unknown>;

interface LovelaceInfo {
    resource_mode: "yaml" | "storage";
}
interface LovelaceResource {
    id: string;
    type: "css" | "js" | "module" | "html";
    url: string;
}
interface LovelaceResourcesMutableParams {
    res_type: LovelaceResource["type"];
    url: string;
}
declare const fetchResources: (conn: Connection) => Promise<LovelaceResource[]>;
declare const createResource: (hass: HomeAssistant, values: LovelaceResourcesMutableParams) => Promise<LovelaceResource>;
declare const updateResource: (hass: HomeAssistant, id: string, updates: Partial<LovelaceResourcesMutableParams>) => Promise<LovelaceResource>;
declare const deleteResource: (hass: HomeAssistant, id: string) => Promise<unknown>;
declare const fetchLovelaceInfo: (hass: HomeAssistant) => Promise<LovelaceInfo>;

interface LovelaceStrategyConfig {
    type: string;
    [key: string]: any;
}
/** Must stay aligned with `STRATEGIES.dashboard` in `panels/lovelace/strategies/get-strategy.ts`. */
declare const LOVELACE_BUILTIN_DASHBOARD_STRATEGY_TYPES: readonly ["original-states", "map", "iframe", "areas", "home", "energy"];
type LovelaceBuiltinDashboardStrategyType = (typeof LOVELACE_BUILTIN_DASHBOARD_STRATEGY_TYPES)[number];
/** Dashboard strategy id from the new-dashboard picker: built-in key or `custom:…`. */
type LovelaceDashboardStrategyTypeId = LovelaceBuiltinDashboardStrategyType | `custom:${string}`;

interface LovelaceBadgeConfig {
    type: string;
    [key: string]: any;
    visibility?: Condition[];
    disabled?: boolean;
}
declare const ensureBadgeConfig: (config: Partial<LovelaceBadgeConfig> | string) => LovelaceBadgeConfig;

type ToastCloseReason = "dismiss" | "action" | "timeout" | "programmatic";
interface ToastClosedEventDetail {
    reason: ToastCloseReason;
}
declare class HaToast extends LitElement {
    labelText: string;
    timeoutMs: number;
    bottomOffset: number;
    private _toast?;
    private _actionElements?;
    private _dismissElements?;
    private _active;
    private _visible;
    private _dismissTimer?;
    private _closeReason;
    private _transitionId;
    disconnectedCallback(): void;
    show(): Promise<void>;
    hide(reason?: ToastCloseReason): Promise<void>;
    close(reason?: ToastCloseReason): void;
    private _setDismissTimer;
    private _isPopoverOpen;
    private _showToastPopover;
    private _hideToastPopover;
    private _waitForTransitionEnd;
    protected render(): lit_html.TemplateResult<1>;
    static styles: lit.CSSResult;
}
declare global {
    interface HASSDomEvents {
        "toast-closed": ToastClosedEventDetail;
    }
    interface HTMLElementTagNameMap {
        "ha-toast": HaToast;
    }
}

interface ShowToastParams {
    id?: string;
    message: string | {
        translationKey: LocalizeKeys;
        args?: Record<string, string>;
    };
    action?: ToastActionParams;
    duration?: number;
    dismissable?: boolean;
    bottomOffset?: number;
}
interface ToastActionParams {
    action: () => void;
    text: string | {
        translationKey: LocalizeKeys;
        args?: Record<string, string>;
    };
}
declare class NotificationManager extends LitElement {
    hass: HomeAssistant;
    private _parameters?;
    private _toast;
    private _showDialogId;
    showDialog(parameters: ShowToastParams): Promise<void>;
    private _toastClosed;
    protected render(): typeof nothing | lit_html.TemplateResult<1>;
    private _buttonClicked;
    private _dismissClicked;
}
declare global {
    interface HTMLElementTagNameMap {
        "notification-manager": NotificationManager;
    }
    interface HASSDomEvents {
        "hass-notification": ShowToastParams;
    }
}

type AlarmMode = "armed_home" | "armed_away" | "armed_night" | "armed_vacation" | "armed_custom_bypass" | "disarmed";

declare const HVAC_MODES: readonly ["auto", "heat_cool", "heat", "cool", "dry", "fan_only", "off"];
type HvacMode = (typeof HVAC_MODES)[number];

declare const OPERATION_MODES: readonly ["electric", "gas", "heat_pump", "eco", "performance", "high_demand", "off"];
type OperationMode = (typeof OPERATION_MODES)[number];

type ModernForecastType = "hourly" | "daily" | "twice_daily";
type ForecastType = ModernForecastType | "legacy";
type ForecastPrecipitationType = "amount" | "probability";

type ButtonCardData = Record<string, any>;
interface ButtonCardFeatureConfig {
    type: "button";
    action_name?: string;
    data?: ButtonCardData;
}
interface CoverOpenCloseCardFeatureConfig {
    type: "cover-open-close";
}
interface CoverPositionCardFeatureConfig {
    type: "cover-position";
}
interface CoverTiltCardFeatureConfig {
    type: "cover-tilt";
}
interface CoverTiltPositionCardFeatureConfig {
    type: "cover-tilt-position";
}
interface CoverPositionFavoriteCardFeatureConfig {
    type: "cover-position-favorite";
}
interface CoverTiltFavoriteCardFeatureConfig {
    type: "cover-tilt-favorite";
}
interface LightBrightnessCardFeatureConfig {
    type: "light-brightness";
}
interface LightColorTempCardFeatureConfig {
    type: "light-color-temp";
}
interface LightColorFavoritesCardFeatureConfig {
    type: "light-color-favorites";
}
interface LockCommandsCardFeatureConfig {
    type: "lock-commands";
}
interface LockOpenDoorCardFeatureConfig {
    type: "lock-open-door";
}
declare const MEDIA_PLAYER_PLAYBACK_CONTROLS: readonly ["turn_on", "turn_off", "media_play", "media_pause", "media_play_pause", "media_stop", "media_previous_track", "media_next_track", "volume_down", "volume_up", "volume_mute", "shuffle", "repeat"];
type MediaPlayerPlaybackControl = (typeof MEDIA_PLAYER_PLAYBACK_CONTROLS)[number];
interface MediaPlayerPlaybackCardFeatureConfig {
    type: "media-player-playback";
    controls?: MediaPlayerPlaybackControl[];
}
interface MediaPlayerSourceCardFeatureConfig {
    type: "media-player-source";
    sources?: string[];
}
interface MediaPlayerVolumeSliderCardFeatureConfig {
    type: "media-player-volume-slider";
    show_mute_button?: boolean;
}
interface MediaPlayerVolumeButtonsCardFeatureConfig {
    type: "media-player-volume-buttons";
    step?: number;
    show_mute_button?: boolean;
}
interface MediaPlayerSoundModeCardFeatureConfig {
    type: "media-player-sound-mode";
    sound_modes?: string[];
}
interface FanDirectionCardFeatureConfig {
    type: "fan-direction";
}
interface FanOscillateCardFeatureConfig {
    type: "fan-oscillate";
}
interface FanPresetModesCardFeatureConfig {
    type: "fan-preset-modes";
    style?: "dropdown" | "icons";
    preset_modes?: string[];
}
interface FanSpeedCardFeatureConfig {
    type: "fan-speed";
}
interface AlarmModesCardFeatureConfig {
    type: "alarm-modes";
    modes?: AlarmMode[];
}
interface ClimateFanModesCardFeatureConfig {
    type: "climate-fan-modes";
    style?: "dropdown" | "icons";
    fan_modes?: string[];
}
interface ClimateSwingModesCardFeatureConfig {
    type: "climate-swing-modes";
    style?: "dropdown" | "icons";
    swing_modes?: string[];
}
interface ClimateSwingHorizontalModesCardFeatureConfig {
    type: "climate-swing-horizontal-modes";
    style?: "dropdown" | "icons";
    swing_horizontal_modes?: string[];
}
interface ClimateHvacModesCardFeatureConfig {
    type: "climate-hvac-modes";
    style?: "dropdown" | "icons";
    hvac_modes?: HvacMode[];
}
interface ClimatePresetModesCardFeatureConfig {
    type: "climate-preset-modes";
    style?: "dropdown" | "icons";
    preset_modes?: string[];
}
declare const COUNTER_ACTIONS: readonly ["decrement", "reset", "increment"];
type CounterActions = (typeof COUNTER_ACTIONS)[number];
interface CounterActionsCardFeatureConfig {
    type: "counter-actions";
    actions?: CounterActions[];
}
interface DateSetCardFeatureConfig {
    type: "date-set";
}
interface SelectOptionsCardFeatureConfig {
    type: "select-options";
    options?: string[];
}
interface NumericInputCardFeatureConfig {
    type: "numeric-input";
    style?: "buttons" | "slider";
}
interface TargetHumidityCardFeatureConfig {
    type: "target-humidity";
}
interface TargetTemperatureCardFeatureConfig {
    type: "target-temperature";
}
interface ToggleCardFeatureConfig {
    type: "toggle";
}
interface WaterHeaterOperationModesCardFeatureConfig {
    type: "water-heater-operation-modes";
    style?: "dropdown" | "icons";
    operation_modes?: OperationMode[];
}
interface HumidifierModesCardFeatureConfig {
    type: "humidifier-modes";
    style?: "dropdown" | "icons";
    modes?: string[];
}
interface HumidifierToggleCardFeatureConfig {
    type: "humidifier-toggle";
}
declare const VACUUM_COMMANDS: readonly ["start_pause", "stop", "clean_spot", "locate", "return_home"];
type VacuumCommand = (typeof VACUUM_COMMANDS)[number];
interface VacuumCommandsCardFeatureConfig {
    type: "vacuum-commands";
    commands?: VacuumCommand[];
}
interface ValveOpenCloseCardFeatureConfig {
    type: "valve-open-close";
}
interface ValvePositionCardFeatureConfig {
    type: "valve-position";
}
interface ValvePositionFavoriteCardFeatureConfig {
    type: "valve-position-favorite";
}
declare const LAWN_MOWER_COMMANDS: readonly ["start_pause", "dock"];
type LawnMowerCommand = (typeof LAWN_MOWER_COMMANDS)[number];
interface LawnMowerCommandsCardFeatureConfig {
    type: "lawn-mower-commands";
    commands?: LawnMowerCommand[];
}
interface UpdateActionsCardFeatureConfig {
    type: "update-actions";
    backup?: "yes" | "no" | "ask";
}
interface TrendGraphCardFeatureConfig {
    type: "trend-graph";
    hours_to_show?: number;
    detail?: boolean;
}
type ForecastResolution = "daily" | "twice_daily" | "hourly";
interface TemperatureForecastCardFeatureConfig {
    type: "temperature-forecast";
    forecast_type?: ForecastResolution;
    days_to_show?: number;
    hours_to_show?: number;
    color?: string;
    show_labels?: boolean;
}
interface PrecipitationForecastCardFeatureConfig {
    type: "precipitation-forecast";
    forecast_type?: ForecastResolution;
    days_to_show?: number;
    hours_to_show?: number;
    precipitation_type?: ForecastPrecipitationType;
    color?: string;
    show_labels?: boolean;
}
declare const AREA_CONTROL_DOMAINS: readonly ["light", "fan", "cover-shutter", "cover-blind", "cover-curtain", "cover-shade", "cover-awning", "cover-garage", "cover-gate", "cover-door", "cover-window", "cover-damper", "switch"];
type AreaControlDomain = (typeof AREA_CONTROL_DOMAINS)[number];
type AreaControl = AreaControlDomain | {
    entity_id: string;
};
interface AreaControlsCardFeatureConfig {
    type: "area-controls";
    controls?: AreaControl[];
}
interface BarGaugeCardFeatureConfig {
    type: "bar-gauge";
    min?: number;
    max?: number;
}
type LovelaceCardFeaturePosition = "bottom" | "inline";
type LovelaceCardFeatureConfig = AlarmModesCardFeatureConfig | ButtonCardFeatureConfig | ClimateFanModesCardFeatureConfig | ClimateSwingModesCardFeatureConfig | ClimateSwingHorizontalModesCardFeatureConfig | ClimateHvacModesCardFeatureConfig | ClimatePresetModesCardFeatureConfig | CounterActionsCardFeatureConfig | CoverOpenCloseCardFeatureConfig | CoverPositionCardFeatureConfig | CoverPositionFavoriteCardFeatureConfig | CoverTiltFavoriteCardFeatureConfig | CoverTiltPositionCardFeatureConfig | CoverTiltCardFeatureConfig | DateSetCardFeatureConfig | FanDirectionCardFeatureConfig | FanOscillateCardFeatureConfig | FanPresetModesCardFeatureConfig | FanSpeedCardFeatureConfig | TrendGraphCardFeatureConfig | TemperatureForecastCardFeatureConfig | PrecipitationForecastCardFeatureConfig | HumidifierToggleCardFeatureConfig | HumidifierModesCardFeatureConfig | LawnMowerCommandsCardFeatureConfig | LightBrightnessCardFeatureConfig | LightColorTempCardFeatureConfig | LightColorFavoritesCardFeatureConfig | LockCommandsCardFeatureConfig | LockOpenDoorCardFeatureConfig | MediaPlayerPlaybackCardFeatureConfig | MediaPlayerSoundModeCardFeatureConfig | MediaPlayerSourceCardFeatureConfig | MediaPlayerVolumeButtonsCardFeatureConfig | MediaPlayerVolumeSliderCardFeatureConfig | NumericInputCardFeatureConfig | SelectOptionsCardFeatureConfig | TrendGraphCardFeatureConfig | TargetHumidityCardFeatureConfig | TargetTemperatureCardFeatureConfig | ToggleCardFeatureConfig | UpdateActionsCardFeatureConfig | VacuumCommandsCardFeatureConfig | ValveOpenCloseCardFeatureConfig | ValvePositionFavoriteCardFeatureConfig | ValvePositionCardFeatureConfig | WaterHeaterOperationModesCardFeatureConfig | AreaControlsCardFeatureConfig | BarGaugeCardFeatureConfig;
interface LovelaceCardFeatureContext {
    entity_id?: string;
    area_id?: string;
}

interface CameraEntityAttributes extends HassEntityAttributeBase {
    model_name: string;
    access_token?: string;
    brand: string;
    motion_detection: boolean;
    frontend_stream_type: string;
}
interface CameraEntity extends HassEntityBase {
    attributes: CameraEntityAttributes;
}

declare global {
    interface HASSDomEvents {
        "alert-dismissed-clicked": undefined;
    }
}
declare class HaAlert extends LitElement {
    title: string;
    alertType: "info" | "warning" | "error" | "success";
    dismissable: boolean;
    private _localize?;
    narrow: boolean;
    render(): lit_html.TemplateResult<1>;
    private _dismissClicked;
    static styles: lit.CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-alert": HaAlert;
    }
}

declare class HaHLSPlayer extends LitElement {
    hass: HomeAssistant;
    entityid?: string;
    url?: string;
    posterUrl?: string;
    aspectRatio?: number;
    fitMode?: "cover" | "contain" | "fill";
    controls: boolean;
    muted: boolean;
    autoPlay: boolean;
    playsInline: boolean;
    allowExoPlayer: boolean;
    private _videoEl;
    private _error?;
    private _errorIsFatal;
    private _url;
    private _hlsPolyfillInstance?;
    private _exoPlayer;
    private static streamCount;
    private _handleVisibilityChange;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected render(): TemplateResult;
    protected updated(changedProps: PropertyValues<this>): void;
    private _getStreamUrlFromEntityId;
    private _startHls;
    private _renderHLSExoPlayer;
    private _resizeExoPlayer;
    private _isLLHLSSupported;
    private _renderHLSPolyfill;
    private _renderHLSNative;
    private _cleanUp;
    private _resetError;
    private _setFatalError;
    private _setRetryableError;
    private _reportStreams;
    private _loadedData;
    static styles: lit.CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-hls-player": HaHLSPlayer;
    }
}

/**
 * A WebRTC stream is established by first sending an offer through a signal
 * path via an integration. An answer is returned, then the rest of the stream
 * is handled entirely client side.
 */
declare class HaWebRtcPlayer extends LitElement {
    hass: HomeAssistant;
    entityid?: string;
    aspectRatio?: number;
    fitMode?: "cover" | "contain" | "fill";
    controls: boolean;
    muted: boolean;
    autoPlay: boolean;
    playsInline: boolean;
    posterUrl?: string;
    private _error?;
    private _videoEl;
    private _clientConfig?;
    private _peerConnection?;
    private _remoteStream?;
    private _unsub?;
    private _sessionId?;
    private _candidatesList;
    private _handleVisibilityChange;
    protected render(): TemplateResult;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected willUpdate(changedProperties: PropertyValues<this>): void;
    private _startWebRtc;
    private _startNegotiation;
    private _iceConnectionStateChanged;
    private _handleOfferEvent;
    private _handleIceCandidate;
    private _addTrack;
    private _handleAnswer;
    private _cleanUp;
    private _loadedData;
    private _startTimer;
    private _stopTimer;
    private _logEvent;
    static styles: lit.CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-web-rtc-player": HaWebRtcPlayer;
    }
}

declare class HaCameraStream extends LitElement {
    hass?: HomeAssistant;
    stateObj?: CameraEntity;
    aspectRatio?: number;
    fitMode?: "cover" | "contain" | "fill";
    controls: boolean;
    muted: boolean;
    allowExoPlayer: boolean;
    private _posterUrl?;
    private _connected;
    private _capabilities?;
    private _hlsStreams?;
    private _webRtcStreams?;
    willUpdate(changedProps: PropertyValues<this>): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected render(): typeof nothing | lit_html.TemplateResult<1>;
    private _renderStream;
    private _getCapabilities;
    private _getPosterUrl;
    private _handleHlsStreams;
    private _handleWebRtcStreams;
    private _streams;
    static styles: lit.CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-camera-stream": HaCameraStream;
    }
    interface HASSDomEvents {
        load: undefined;
        streams: {
            hasAudio: boolean;
            hasVideo: boolean;
            codecs?: string[];
        };
    }
}

declare class HaSpinner extends Spinner {
    size?: "tiny" | "small" | "medium" | "large";
    protected updated(changedProps: PropertyValues<this>): void;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-spinner": HaSpinner;
    }
}

type StateSpecificConfig = Record<string, string>;
declare class HuiImage extends LitElement {
    hass?: HomeAssistant;
    entity?: string;
    image?: string;
    stateImage?: StateSpecificConfig;
    cameraImage?: string;
    cameraView?: "live" | "auto";
    aspectRatio?: string;
    filter?: string;
    stateFilter?: StateSpecificConfig;
    darkModeImage?: string;
    darkModeFilter?: string;
    fitMode?: "cover" | "contain" | "fill";
    private _imageVisible?;
    private _loadState?;
    private _cameraImageSrc?;
    private _loadedImageSrc?;
    private _resolvedImageSrc?;
    private _resolvedDarkModeImageSrc?;
    private _resolvedStateImages;
    private _lastImageHeight?;
    private _intersectionObserver?;
    private _cameraUpdater?;
    private _ratio;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected handleIntersectionCallback(entries: IntersectionObserverEntry[]): void;
    willUpdate(changedProps: PropertyValues): void;
    protected render(): typeof nothing | lit_html.TemplateResult<1>;
    protected _shouldStartCameraUpdates(oldHass?: HomeAssistant): boolean;
    private _startIntersectionObserverOrUpdates;
    private _stopIntersectionObserver;
    private _startUpdateCameraInterval;
    private _stopUpdateCameraInterval;
    private _onImageError;
    private _onImageLoad;
    private _onVideoLoad;
    private _updateCameraImageSrcAtInterval;
    private _updateCameraImageSrc;
    static styles: lit.CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-image": HuiImage;
    }
}

interface LovelaceElementConfigBase {
    type: string;
    style?: Record<string, string>;
}
type LovelaceElementConfig = ConditionalElementConfig | IconElementConfig | ImageElementConfig | ServiceButtonElementConfig | StateBadgeElementConfig | StateIconElementConfig | StateLabelElementConfig;
interface LovelaceElement extends HTMLElement {
    hass?: HomeAssistant;
    preview?: boolean;
    setConfig(config: LovelaceElementConfig): void;
}
interface ConditionalElementConfig extends LovelaceElementConfigBase {
    conditions: Condition[];
    elements: LovelaceElementConfigBase[];
    title?: string;
}
interface IconElementConfig extends LovelaceElementConfigBase {
    entity?: string;
    name?: string;
    tap_action?: ActionConfig;
    hold_action?: ActionConfig;
    double_tap_action?: ActionConfig;
    icon?: string;
    title?: string;
}
interface ImageElementConfig extends LovelaceElementConfigBase {
    entity?: string;
    tap_action?: ActionConfig;
    hold_action?: ActionConfig;
    double_tap_action?: ActionConfig;
    image?: string | MediaSelectorValue;
    image_entity?: string;
    state_image?: string;
    camera_image?: string;
    camera_view?: HuiImage["cameraView"];
    dark_mode_image?: string;
    dark_mode_filter?: string;
    filter?: string;
    state_filter?: string;
    aspect_ratio?: string;
    title?: string;
}
interface ServiceButtonElementConfig extends LovelaceElementConfigBase {
    title?: string;
    service?: string;
    action?: string;
    target?: HassServiceTarget;
    service_data?: Record<string, unknown>;
    data?: Record<string, unknown>;
}
interface StateBadgeElementConfig extends LovelaceElementConfigBase {
    entity?: string;
    name?: string;
    title?: string;
    tap_action?: ActionConfig;
    hold_action?: ActionConfig;
    double_tap_action?: ActionConfig;
}
interface StateIconElementConfig extends LovelaceElementConfigBase {
    entity?: string;
    tap_action?: ActionConfig;
    hold_action?: ActionConfig;
    double_tap_action?: ActionConfig;
    icon?: string;
    state_color?: boolean;
    title?: string;
}
interface StateLabelElementConfig extends LovelaceElementConfigBase {
    entity?: string;
    attribute?: string;
    prefix?: string;
    suffix?: string;
    tap_action?: ActionConfig;
    hold_action?: ActionConfig;
    double_tap_action?: ActionConfig;
    title?: string;
}

type FilterOperator = "==" | "<=" | "<" | ">=" | ">" | "!=" | "in" | "not in" | "regex";
type LegacyStateFilter = {
    operator: FilterOperator;
    attribute?: string;
    value: string | number | (string | number)[];
} | number | string;

interface ConditionalBaseConfig extends LovelaceCardConfig {
    card: LovelaceCardConfig | LovelaceElementConfig;
    conditions: Condition[];
}
declare const TIMESTAMP_RENDERING_FORMATS: readonly ["relative", "total", "date", "time", "datetime"];
type TimestampRenderingFormat = (typeof TIMESTAMP_RENDERING_FORMATS)[number];

interface EntityConfig {
    entity: string;
    type?: string;
    name?: string | EntityNameItem | EntityNameItem[];
    icon?: string;
    image?: string;
}
interface EntityFilterEntityConfig extends EntityConfig {
    state_filter?: LegacyStateFilter[];
    conditions?: Condition[];
}
interface DividerConfig {
    type: "divider";
    style?: Record<string, string>;
}
interface SectionConfig {
    type: "section";
    label: string;
}
interface WeblinkConfig {
    type: "weblink";
    name?: string;
    icon?: string;
    url: string;
    new_tab?: boolean;
    download?: boolean;
}
interface TextConfig {
    type: "text";
    name: string;
    icon?: string;
    text: string;
}
interface CallServiceConfig extends EntityConfig {
    type: "call-service" | "perform-action";
    /** @deprecated use "action" instead */
    service?: string;
    action: string;
    data?: Record<string, any>;
    /** @deprecated use "data" instead */
    service_data?: Record<string, any>;
    action_name?: string;
}
interface ButtonRowConfig extends EntityConfig {
    type: "button";
    action_name?: string;
    tap_action?: ActionConfig;
    hold_action?: ActionConfig;
    double_tap_action?: ActionConfig;
}
interface CastConfig {
    type: "cast";
    icon?: string;
    name?: string;
    view?: string | number;
    dashboard?: string;
    hide_if_unavailable?: boolean;
}
interface ButtonsRowConfig {
    type: "buttons";
    entities: (string | EntityConfig)[];
}
type LovelaceRowConfig = EntityConfig | DividerConfig | SectionConfig | WeblinkConfig | CallServiceConfig | CastConfig | ButtonRowConfig | ButtonsRowConfig | ConditionalRowConfig | AttributeRowConfig | TextConfig;
interface LovelaceRow extends HTMLElement {
    hass?: HomeAssistant;
    preview?: boolean;
    setConfig(config: LovelaceRowConfig): any;
}
interface ConditionalRowConfig extends EntityConfig {
    row: EntityConfig;
    conditions: Condition[];
}
interface AttributeRowConfig extends EntityConfig {
    attribute: string;
    prefix?: string;
    suffix?: string;
    format?: TimestampRenderingFormat;
}

declare class HaStateIcon extends LitElement {
    stateObj?: HassEntity;
    stateValue?: string;
    icon?: string;
    protected _config?: ContextType<typeof configContext>;
    protected _connection?: ContextType<typeof connectionContext>;
    protected _entities?: ContextType<typeof entitiesContext>;
    protected render(): typeof nothing | lit_html.TemplateResult<1>;
    private _renderFallback;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-state-icon": HaStateIcon;
    }
}

declare class HaEntityMarker extends LitElement {
    hass: HomeAssistant;
    entityId?: string;
    entityName?: string;
    entityUnit?: string;
    entityPicture?: string;
    entityColor?: string;
    showIcon: boolean;
    protected render(): lit_html.TemplateResult<1>;
    private _badgeTap;
    static styles: lit.CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-entity-marker": HaEntityMarker;
    }
}

declare global {
    interface HASSDomEvents {
        "map-clicked": {
            location: [number, number];
        };
    }
}
interface HaMapPathPoint {
    point: LatLngTuple;
    timestamp: Date;
}
interface HaMapPaths {
    points: HaMapPathPoint[];
    color?: string;
    name?: string;
    gradualOpacity?: number;
    fullDatetime?: boolean;
}
declare const MAP_CARD_MARKER_LABEL_MODES: readonly ["name", "state", "attribute", "icon"];
type MapCardMarkerLabelMode = (typeof MAP_CARD_MARKER_LABEL_MODES)[number];
interface HaMapEntity {
    entity_id: string;
    color: string;
    label_mode?: MapCardMarkerLabelMode;
    attribute?: string;
    unit?: string;
    name?: string;
    focus?: boolean;
}
declare class HaMap extends ReactiveElement {
    hass: HomeAssistant;
    entities?: string[] | HaMapEntity[];
    paths?: HaMapPaths[];
    layers?: Layer[];
    clickable: boolean;
    autoFit: boolean;
    renderPassive: boolean;
    interactiveZones: boolean;
    fitZones: boolean;
    themeMode: ThemeMode;
    zoom: number;
    clusterMarkers: boolean;
    private _loaded;
    private _mapElement?;
    leafletMap?: Map;
    private Leaflet?;
    private _resizeObserver?;
    private _mapItems;
    private _mapFocusItems;
    private _mapZones;
    private _mapFocusZones;
    private _mapCluster;
    private _mapPaths;
    private _clickCount;
    private _isProgrammaticFit;
    private _pauseAutoFit;
    connectedCallback(): void;
    private _handleVisibilityChange;
    disconnectedCallback(): void;
    protected update(changedProps: PropertyValues): void;
    private get _darkMode();
    private _updateMapStyle;
    private _loading;
    private _loadMap;
    fitMap(options?: {
        zoom?: number;
        pad?: number;
        unpause_autofit?: boolean;
    }): void;
    fitBounds(boundingbox: LatLngExpression[], options?: {
        zoom?: number;
        pad?: number;
    }): void;
    private _drawLayers;
    private _computePathTooltip;
    private _drawPaths;
    private _drawEntities;
    private _getMarkerSize;
    private _attachObserver;
    static styles: lit.CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-map": HaMap;
    }
}

type StatisticType = "change" | "state" | "sum" | "min" | "max" | "mean";
type StatisticPeriod = "5minute" | "hour" | "day" | "week" | "month";
interface Statistic {
    max: number | null;
    mean: number | null;
    min: number | null;
    change: number | null;
}

interface PowerConfig {
    stat_rate?: string;
    stat_rate_inverted?: string;
    stat_rate_from?: string;
    stat_rate_to?: string;
}
/**
 * Grid source format.
 * Each grid connection is a single object with import/export/power together.
 * Multiple grid sources are allowed.
 */
interface GridSourceTypeEnergyPreference {
    type: "grid";
    stat_energy_from: string | null;
    stat_energy_to: string | null;
    stat_cost: string | null;
    entity_energy_price: string | null;
    number_energy_price: number | null;
    stat_compensation: string | null;
    entity_energy_price_export: string | null;
    number_energy_price_export: number | null;
    stat_rate?: string;
    power_config?: PowerConfig;
    cost_adjustment_day: number;
    name?: string;
}
interface SolarSourceTypeEnergyPreference {
    type: "solar";
    stat_energy_from: string;
    stat_rate?: string;
    config_entry_solar_forecast: string[] | null;
    name?: string;
}
interface BatterySourceTypeEnergyPreference {
    type: "battery";
    stat_energy_from: string;
    stat_energy_to: string;
    stat_rate?: string;
    power_config?: PowerConfig;
    stat_soc?: string;
    name?: string;
}
interface GasSourceTypeEnergyPreference {
    type: "gas";
    stat_energy_from: string;
    stat_rate?: string;
    stat_cost: string | null;
    entity_energy_price: string | null;
    number_energy_price: number | null;
    unit_of_measurement?: string | null;
    name?: string;
}
interface WaterSourceTypeEnergyPreference {
    type: "water";
    stat_energy_from: string;
    stat_rate?: string;
    stat_cost: string | null;
    entity_energy_price: string | null;
    number_energy_price: number | null;
    unit_of_measurement?: string | null;
    name?: string;
}
interface EnergySourceByType {
    grid?: GridSourceTypeEnergyPreference[];
    solar?: SolarSourceTypeEnergyPreference[];
    battery?: BatterySourceTypeEnergyPreference[];
    gas?: GasSourceTypeEnergyPreference[];
    water?: WaterSourceTypeEnergyPreference[];
}

interface LovelaceHeadingBadgeConfig {
    type?: string;
    [key: string]: any;
    visibility?: Condition[];
}

declare const HOME_SUMMARIES: readonly ["light", "climate", "security", "media_players", "maintenance", "energy", "persons"];
type HomeSummary = (typeof HOME_SUMMARIES)[number];

type AlarmPanelCardConfigState = "arm_away" | "arm_home" | "arm_night" | "arm_vacation" | "arm_custom_bypass";
interface AlarmPanelCardConfig extends LovelaceCardConfig {
    entity: string;
    name?: string | EntityNameItem | EntityNameItem[];
    states?: AlarmPanelCardConfigState[];
    theme?: string;
}
interface CalendarCardConfig extends LovelaceCardConfig {
    entities: string[];
    initial_view?: FullCalendarView;
    title?: string;
    theme?: string;
}
interface ConditionalCardConfig extends LovelaceCardConfig {
    card: LovelaceCardConfig;
    conditions: (Condition | LegacyCondition)[];
}
interface EmptyStateButtonConfig {
    text: string;
    icon?: string;
    appearance?: "accent" | "filled" | "outlined" | "plain";
    variant?: "brand" | "neutral" | "success" | "warning" | "danger";
    tap_action: ActionConfig;
}
interface EmptyStateCardConfig extends LovelaceCardConfig {
    content_only?: boolean;
    icon?: string;
    icon_color?: string;
    title?: string;
    content?: string;
    buttons?: EmptyStateButtonConfig[];
}
interface EntityCardConfig extends LovelaceCardConfig {
    entity: string;
    name?: string | EntityNameItem | EntityNameItem[];
    icon?: string;
    attribute?: string;
    unit?: string;
    theme?: string;
    state_color?: boolean;
    tap_action?: ActionConfig;
    hold_action?: ActionConfig;
    double_tap_action?: ActionConfig;
}
interface EntitiesCardEntityConfig extends EntityConfig {
    type?: string;
    secondary_info?: "entity-id" | "last-changed" | "last-triggered" | "last-updated" | "area" | "position" | "state" | "tilt-position" | "brightness";
    action_name?: string;
    action?: string;
    /** @deprecated use "action" instead */
    service?: string;
    service_data?: Record<string, unknown>;
    data?: Record<string, unknown>;
    url?: string;
    tap_action?: ActionConfig;
    hold_action?: ActionConfig;
    double_tap_action?: ActionConfig;
    state_color?: boolean;
    show_name?: boolean;
    show_icon?: boolean;
}
interface EntitiesCardConfig extends LovelaceCardConfig {
    type: "entities";
    show_header_toggle?: boolean;
    title?: string;
    entities: (LovelaceRowConfig | string)[];
    theme?: string;
    icon?: string;
    header?: LovelaceHeaderFooterConfig;
    footer?: LovelaceHeaderFooterConfig;
    state_color?: boolean;
}
type AreaCardDisplayType = "compact" | "icon" | "picture" | "camera";
interface AreaCardConfig extends LovelaceCardConfig {
    area?: string;
    name?: string;
    color?: string;
    navigation_path?: string;
    display_type?: AreaCardDisplayType;
    /** @deprecated Use `display_type` instead */
    show_camera?: boolean;
    camera_view?: HuiImage["cameraView"];
    aspect_ratio?: string;
    sensor_classes?: string[];
    alert_classes?: string[];
    features?: LovelaceCardFeatureConfig[];
    features_position?: LovelaceCardFeaturePosition;
    exclude_entities?: string[];
    vertical?: boolean;
    tap_action?: ActionConfig;
    image_tap_action?: ActionConfig;
}
interface ButtonCardConfig extends LovelaceCardConfig {
    entity?: string;
    name?: string | EntityNameItem | EntityNameItem[];
    show_name?: boolean;
    icon?: string;
    icon_height?: string;
    show_icon?: boolean;
    theme?: string;
    tap_action?: ActionConfig;
    hold_action?: ActionConfig;
    double_tap_action?: ActionConfig;
    /** @deprecated use `color` instead */
    state_color?: boolean;
    show_state?: boolean;
    color?: string;
}
interface EnergyCardBaseConfig extends LovelaceCardConfig {
    collection_key?: string;
}
interface EnergyCardConfig extends EnergyCardBaseConfig {
    title?: string;
}
interface EnergyCardSankeyConfig extends EnergyCardConfig {
    layout?: "auto" | "vertical" | "horizontal";
    group_by_floor?: boolean;
    group_by_area?: boolean;
}
interface EnergyDateSelectorCardConfig extends EnergyCardBaseConfig {
    vertical_opening_direction?: "auto" | "up" | "down";
    opening_direction?: "auto" | "right" | "left" | "center" | "inline";
    disable_compare?: boolean;
}
interface EnergyDistributionCardConfig extends EnergyCardConfig {
    type: "energy-distribution";
    link_dashboard?: boolean;
}
interface EnergyUsageGraphCardConfig extends EnergyCardConfig {
    type: "energy-usage-graph";
}
interface EnergySolarGraphCardConfig extends EnergyCardConfig {
    type: "energy-solar-graph";
}
interface EnergyGasGraphCardConfig extends EnergyCardConfig {
    type: "energy-gas-graph";
}
interface EnergyWaterGraphCardConfig extends EnergyCardConfig {
    type: "energy-water-graph";
}
interface EnergyDevicesGraphCardConfig extends EnergyCardConfig {
    type: "energy-devices-graph";
    max_devices?: number;
    hide_compound_stats?: boolean;
    modes?: ("bar" | "pie")[];
}
interface EnergyDevicesDetailGraphCardConfig extends EnergyCardConfig {
    type: "energy-devices-detail-graph";
    max_devices?: number;
}
interface EnergySourcesTableCardConfig extends EnergyCardConfig {
    type: "energy-sources-table";
    types?: (keyof EnergySourceByType)[];
    show_only_totals?: boolean;
}
interface EnergySolarGaugeCardConfig extends EnergyCardConfig {
    type: "energy-solar-consumed-gauge";
}
interface EnergySelfSufficiencyGaugeCardConfig extends EnergyCardConfig {
    type: "energy-self-sufficiency-gauge";
}
interface EnergyGridNeutralityGaugeCardConfig extends EnergyCardConfig {
    type: "energy-grid-neutrality-gauge";
}
interface EnergyGridBalanceCardConfig extends EnergyCardConfig {
    type: "energy-grid-balance";
}
interface EnergyCarbonGaugeCardConfig extends EnergyCardConfig {
    type: "energy-carbon-consumed-gauge";
}
interface PowerSourcesGraphCardConfig extends EnergyCardConfig {
    type: "power-sources-graph";
    show_legend?: boolean;
}
interface EnergySankeyCardConfig extends EnergyCardSankeyConfig {
    type: "energy-sankey";
}
interface PowerSankeyCardConfig extends EnergyCardSankeyConfig {
    type: "power-sankey";
}
interface WaterSankeyCardConfig extends EnergyCardSankeyConfig {
    type: "water-sankey";
}
interface WaterFlowSankeyCardConfig extends EnergyCardSankeyConfig {
    type: "water-flow-sankey";
}
interface EntityFilterCardConfig extends LovelaceCardConfig {
    type: "entity-filter";
    entities: (EntityFilterEntityConfig | string)[];
    state_filter?: LegacyStateFilter[];
    conditions: Condition[];
    card?: Partial<LovelaceCardConfig>;
    show_empty?: boolean;
}
interface ErrorCardConfig extends LovelaceCardConfig {
    error?: string;
    message?: string;
    origConfig?: LovelaceCardConfig;
    severity?: "warning" | "error";
}
interface SeverityConfig {
    green?: number;
    yellow?: number;
    red?: number;
}
interface GaugeSegment {
    from: number;
    color: string;
    label?: string;
}
interface GaugeCardConfig extends LovelaceCardConfig {
    entity: string;
    attribute?: string;
    name?: string | EntityNameItem | EntityNameItem[];
    unit?: string;
    min?: number;
    max?: number;
    severity?: SeverityConfig;
    theme?: string;
    needle?: boolean;
    segments?: GaugeSegment[];
    tap_action?: ActionConfig;
    hold_action?: ActionConfig;
    double_tap_action?: ActionConfig;
}
interface ActionsConfig {
    tap_action?: ActionConfig;
    hold_action?: ActionConfig;
    double_tap_action?: ActionConfig;
}
interface ConfigEntity extends EntityConfig, ActionsConfig {
}
interface PictureGlanceEntityConfig extends ConfigEntity {
    show_state?: boolean;
    attribute?: string;
    prefix?: string;
    suffix?: string;
}
interface GlanceConfigEntity extends ConfigEntity {
    show_last_changed?: boolean;
    image?: string;
    show_state?: boolean;
    state_color?: boolean;
    format?: TimestampRenderingFormat;
}
interface GlanceCardConfig extends LovelaceCardConfig {
    show_name?: boolean;
    show_state?: boolean;
    show_icon?: boolean;
    title?: string;
    theme?: string;
    entities: (string | GlanceConfigEntity)[];
    columns?: number;
    state_color?: boolean;
}
interface HumidifierCardConfig extends LovelaceCardConfig {
    entity: string;
    theme?: string;
    name?: string | EntityNameItem | EntityNameItem[];
    show_current_as_primary?: boolean;
    features?: LovelaceCardFeatureConfig[];
}
interface IframeCardConfig extends LovelaceCardConfig {
    allow_open_top_navigation?: boolean;
    aspect_ratio?: string;
    disable_sandbox?: boolean;
    title?: string;
    allow?: string;
    url: string;
    hide_background?: boolean;
}
interface LightCardConfig extends LovelaceCardConfig {
    entity: string;
    name?: string | EntityNameItem | EntityNameItem[];
    theme?: string;
    icon?: string;
    tap_action?: ActionConfig;
    hold_action?: ActionConfig;
    double_tap_action?: ActionConfig;
}
interface LogbookCardConfig extends LovelaceCardConfig {
    type: "logbook";
    /**
     * @deprecated Use target instead
     */
    entities?: string[];
    target: HassServiceTarget;
    title?: string;
    hours_to_show?: number;
    theme?: string;
    state_filter?: string[];
}
interface MapEntityConfig extends EntityConfig {
    label_mode?: MapCardMarkerLabelMode;
    attribute?: string;
    unit?: string;
    focus?: boolean;
    name?: string;
    color?: string;
}
interface GeoLocationSourceConfig {
    source: string;
    label_mode?: MapCardMarkerLabelMode;
    attribute?: string;
    unit?: string;
    focus?: boolean;
}
interface MapCardConfig extends LovelaceCardConfig {
    type: "map";
    title?: string;
    aspect_ratio?: string;
    auto_fit?: boolean;
    fit_zones?: boolean;
    default_zoom?: number;
    show_all?: boolean;
    entities?: (MapEntityConfig | string)[];
    hours_to_show?: number;
    geo_location_sources?: (GeoLocationSourceConfig | string)[];
    dark_mode?: boolean;
    theme_mode?: ThemeMode;
    cluster?: boolean;
    conditions?: Condition[];
}
interface MarkdownCardConfig extends LovelaceCardConfig {
    type: "markdown";
    content: string;
    text_only?: boolean;
    title?: string;
    card_size?: number;
    entity_ids?: string | string[];
    theme?: string;
    show_empty?: boolean;
    tap_action?: ActionConfig;
    hold_action?: ActionConfig;
    double_tap_action?: ActionConfig;
}
interface ClockCardConfig extends LovelaceCardConfig {
    type: "clock";
    title?: string;
    clock_style?: "digital" | "analog";
    clock_size?: "small" | "medium" | "large";
    show_seconds?: boolean | undefined;
    seconds_motion?: "continuous" | "tick";
    time_format?: TimeFormat;
    time_zone?: string;
    no_background?: boolean;
    border?: boolean;
    ticks?: "none" | "quarter" | "hour" | "minute";
    face_style?: "markers" | "numbers_upright" | "roman";
}
interface MediaControlCardConfig extends LovelaceCardConfig {
    entity: string;
    name?: string | EntityNameItem | EntityNameItem[];
    theme?: string;
}
interface GraphEntityConfig {
    entity: string;
    name?: string | EntityNameItem | EntityNameItem[];
    color?: string;
}
interface HistoryGraphCardConfig extends LovelaceCardConfig {
    entities: (GraphEntityConfig | string)[];
    hours_to_show?: number;
    title?: string;
    show_names?: boolean;
    logarithmic_scale?: boolean;
    min_y_axis?: number;
    max_y_axis?: number;
    fit_y_data?: boolean;
    split_device_classes?: boolean;
    expand_legend?: boolean;
}
interface StatisticsGraphCardConfig extends EnergyCardBaseConfig {
    entities: (GraphEntityConfig | string)[];
    unit?: string;
    days_to_show?: number;
    period?: "auto" | StatisticPeriod;
    stat_types?: StatisticType | StatisticType[];
    chart_type?: "line" | "bar" | "line-stack" | "bar-stack";
    min_y_axis?: number;
    max_y_axis?: number;
    fit_y_data?: boolean;
    hide_legend?: boolean;
    logarithmic_scale?: boolean;
    energy_date_selection?: boolean;
    expand_legend?: boolean;
}
interface StatisticCardConfig extends EnergyCardBaseConfig {
    name?: string | EntityNameItem | EntityNameItem[];
    entities: (EntityConfig | string)[];
    period: {
        fixed_period?: {
            start: string;
            end: string;
        };
        calendar?: {
            period: string;
            offset?: number;
        };
        rolling_window?: {
            duration: HaDurationData;
            offset: HaDurationData;
        };
    } | "energy_date_selection";
    energy_date_selection?: boolean;
    stat_type: keyof Statistic;
    theme?: string;
}
interface PictureCardConfig extends LovelaceCardConfig {
    image?: string | MediaSelectorValue;
    image_entity?: string;
    tap_action?: ActionConfig;
    hold_action?: ActionConfig;
    double_tap_action?: ActionConfig;
    theme?: string;
    alt_text?: string;
}
declare const PREVIEW_CLICK_CALLBACK: unique symbol;
interface PictureElementsCardConfig extends LovelaceCardConfig {
    title?: string;
    image?: string | MediaSelectorValue;
    image_entity?: string;
    camera_image?: string;
    camera_view?: HuiImage["cameraView"];
    state_image?: Record<string, unknown>;
    state_filter?: string[];
    aspect_ratio?: string;
    entity?: string;
    elements: LovelaceElementConfig[];
    theme?: string;
    dark_mode_image?: string | MediaSelectorValue;
    dark_mode_filter?: string;
    [PREVIEW_CLICK_CALLBACK]?: (x: number, y: number) => void;
}
interface PictureEntityCardConfig extends LovelaceCardConfig {
    entity: string;
    show_entity_picture?: boolean;
    name?: string | EntityNameItem | EntityNameItem[];
    image?: string | MediaSelectorValue;
    camera_image?: string;
    camera_view?: HuiImage["cameraView"];
    state_image?: Record<string, unknown>;
    state_filter?: string[];
    aspect_ratio?: string;
    fit_mode?: "cover" | "contain" | "fill";
    tap_action?: ActionConfig;
    hold_action?: ActionConfig;
    double_tap_action?: ActionConfig;
    show_name?: boolean;
    show_state?: boolean;
    theme?: string;
}
interface PictureGlanceCardConfig extends LovelaceCardConfig {
    entities: (string | PictureGlanceEntityConfig)[];
    title?: string;
    image?: string | MediaSelectorValue;
    image_entity?: string;
    camera_image?: string;
    camera_view?: HuiImage["cameraView"];
    state_image?: Record<string, unknown>;
    state_filter?: string[];
    aspect_ratio?: string;
    fit_mode?: "cover" | "contain" | "fill";
    entity?: string;
    tap_action?: ActionConfig;
    hold_action?: ActionConfig;
    double_tap_action?: ActionConfig;
    show_state?: boolean;
    theme?: string;
}
interface PlantAttributeTarget extends EventTarget {
    value?: string;
}
interface PlantStatusCardConfig extends LovelaceCardConfig {
    name?: string | EntityNameItem | EntityNameItem[];
    entity: string;
    theme?: string;
}
interface SensorCardConfig extends LovelaceCardConfig {
    entity: string;
    name?: string | EntityNameItem | EntityNameItem[];
    icon?: string;
    graph?: string;
    unit?: string;
    detail?: number;
    theme?: string;
    hours_to_show?: number;
    limits?: {
        min?: number;
        max?: number;
    };
}
interface TodoListCardConfig extends LovelaceCardConfig {
    title?: string;
    theme?: string;
    entity?: string;
    hide_completed?: boolean;
    hide_create?: boolean;
    hide_section_headers?: boolean;
    sort?: string;
    due_date_period?: {
        calendar?: {
            period: string;
            offset?: number;
        };
    };
}
interface StackCardConfig extends LovelaceCardConfig {
    cards: LovelaceCardConfig[];
    title?: string;
}
interface GridCardConfig extends StackCardConfig {
    columns?: number;
    square?: boolean;
}
interface ThermostatCardConfig extends LovelaceCardConfig {
    entity: string;
    theme?: string;
    name?: string | EntityNameItem | EntityNameItem[];
    show_current_as_primary?: boolean;
    features?: LovelaceCardFeatureConfig[];
}
interface WeatherForecastCardConfig extends LovelaceCardConfig {
    entity: string;
    name?: string | EntityNameItem | EntityNameItem[];
    show_current?: boolean;
    show_forecast?: boolean;
    forecast_type?: ForecastType;
    forecast_slots?: number;
    secondary_info_attribute?: keyof TranslationDict["ui"]["card"]["weather"]["attributes"];
    round_temperature?: boolean;
    theme?: string;
    tap_action?: ActionConfig;
    hold_action?: ActionConfig;
    double_tap_action?: ActionConfig;
}
interface TileCardConfig extends LovelaceCardConfig {
    entity: string;
    name?: string | EntityNameItem | EntityNameItem[];
    hide_state?: boolean;
    state_content?: string | string[];
    icon?: string;
    color?: string;
    show_entity_picture?: boolean;
    vertical?: boolean;
    tap_action?: ActionConfig;
    hold_action?: ActionConfig;
    double_tap_action?: ActionConfig;
    icon_tap_action?: ActionConfig;
    icon_hold_action?: ActionConfig;
    icon_double_tap_action?: ActionConfig;
    features?: LovelaceCardFeatureConfig[];
    features_position?: LovelaceCardFeaturePosition;
}
interface HeadingCardConfig extends LovelaceCardConfig {
    heading_style?: "title" | "subtitle";
    heading?: string;
    icon?: string;
    tap_action?: ActionConfig;
    badges?: LovelaceHeadingBadgeConfig[];
    /** @deprecated Use `badges` instead */
    entities?: LovelaceHeadingBadgeConfig[];
}
interface HomeSummaryCard extends LovelaceCardConfig {
    summary: HomeSummary;
    vertical?: boolean;
    tap_action?: ActionConfig;
    hold_action?: ActionConfig;
    double_tap_action?: ActionConfig;
}
interface ShortcutCardConfig extends LovelaceCardConfig {
    label?: string;
    description?: string;
    icon?: string;
    color?: string;
    vertical?: boolean;
    tap_action?: ActionConfig;
    hold_action?: ActionConfig;
    double_tap_action?: ActionConfig;
}
interface ToggleGroupCardConfig extends LovelaceCardConfig {
    title: string;
    entities: string[];
    color?: string;
    vertical?: boolean;
}
interface DistributionEntityConfig extends EntityConfig {
    color?: string;
}
interface DistributionCardConfig extends LovelaceCardConfig {
    type: "distribution";
    title?: string;
    entities: (string | DistributionEntityConfig)[];
}
interface DiscoveredDevicesCardConfig extends LovelaceCardConfig {
    hide_empty?: boolean;
    vertical?: boolean;
    tap_action?: ActionConfig;
    hold_action?: ActionConfig;
    double_tap_action?: ActionConfig;
}
interface RepairsCardConfig extends LovelaceCardConfig {
    hide_empty?: boolean;
    vertical?: boolean;
    tap_action?: ActionConfig;
    hold_action?: ActionConfig;
    double_tap_action?: ActionConfig;
}
interface UpdatesCardConfig extends LovelaceCardConfig {
    hide_empty?: boolean;
    vertical?: boolean;
    tap_action?: ActionConfig;
    hold_action?: ActionConfig;
    double_tap_action?: ActionConfig;
}

interface LovelaceHeaderFooterConfig {
    type: "buttons" | "graph" | "picture";
}

declare global {
    interface HASSDomEvents {
        "ll-rebuild": Record<string, unknown>;
        "ll-upgrade": Record<string, unknown>;
    }
}
interface Lovelace {
    config: LovelaceConfig;
    rawConfig: LovelaceRawConfig;
    editMode: boolean;
    urlPath: string | null;
    mode: "generated" | "yaml" | "storage";
    locale: FrontendLocaleData;
    enableFullEditMode: () => void;
    setEditMode: (editMode: boolean) => void;
    saveConfig: (newConfig: LovelaceRawConfig) => Promise<void>;
    deleteConfig: () => Promise<void>;
    showToast: (params: ShowToastParams) => void;
}
interface LovelaceBadge extends HTMLElement {
    hass?: HomeAssistant;
    connectedWhileHidden?: boolean;
    setConfig(config: LovelaceBadgeConfig): void;
}
interface LovelaceLayoutOptions {
    grid_columns?: number | "full";
    grid_rows?: number | "auto";
    grid_max_columns?: number;
    grid_min_columns?: number;
    grid_min_rows?: number;
    grid_max_rows?: number;
}
interface LovelaceGridOptions {
    columns?: number | "full";
    rows?: number | "auto";
    max_columns?: number;
    min_columns?: number;
    min_rows?: number;
    max_rows?: number;
}
interface LovelaceCard extends HTMLElement {
    hass?: HomeAssistant;
    preview?: boolean;
    layout?: string;
    connectedWhileHidden?: boolean;
    getCardSize(): number | Promise<number>;
    /** @deprecated Use `getGridOptions` instead */
    getLayoutOptions?(): LovelaceLayoutOptions;
    getGridOptions?(): LovelaceGridOptions;
    setConfig(config: LovelaceCardConfig): void;
}
interface LovelaceConfigForm {
    schema: HaFormSchema[];
    assertConfig?: (config: LovelaceCardConfig) => void;
    computeLabel?: (schema: HaFormSchema, localize: LocalizeFunc) => string | undefined;
    computeHelper?: (schema: HaFormSchema, localize: LocalizeFunc) => string | undefined;
}
interface LovelaceCardConstructor extends Constructor<LovelaceCard> {
    getStubConfig?: (hass: HomeAssistant, entities: string[], entitiesFallback: string[]) => LovelaceCardConfig;
    getConfigElement?: () => LovelaceCardEditor;
    getConfigForm?: () => LovelaceConfigForm;
}
interface LovelaceBadgeConstructor extends Constructor<LovelaceBadge> {
    getStubConfig?: (hass: HomeAssistant, entities: string[], entitiesFallback: string[]) => LovelaceBadgeConfig;
    getConfigElement?: () => LovelaceBadgeEditor;
    getConfigForm?: () => LovelaceConfigForm;
}
interface LovelaceHeaderFooterConstructor extends Constructor<LovelaceHeaderFooter> {
    getStubConfig?: (hass: HomeAssistant, entities: string[], entitiesFallback: string[]) => LovelaceHeaderFooterConfig;
    getConfigElement?: () => LovelaceHeaderFooterEditor;
}
interface LovelaceRowConstructor extends Constructor<LovelaceRow> {
    getConfigElement?: () => LovelaceRowEditor;
}
interface LovelaceElementConstructor extends Constructor<LovelaceElement> {
    getConfigElement?: () => LovelacePictureElementEditor;
    getStubConfig?: (hass: HomeAssistant, entities: string[], entitiesFallback: string[]) => LovelaceElementConfig;
}
interface LovelaceHeaderFooter extends HTMLElement {
    hass?: HomeAssistant;
    type: "header" | "footer";
    getCardSize(): number | Promise<number>;
    setConfig(config: LovelaceHeaderFooterConfig): void;
}
interface LovelaceCardEditor extends LovelaceGenericElementEditor {
    setConfig(config: LovelaceCardConfig): void;
}
interface LovelaceBadgeEditor extends LovelaceGenericElementEditor {
    setConfig(config: LovelaceBadgeConfig): void;
}
interface LovelaceHeaderFooterEditor extends LovelaceGenericElementEditor {
    setConfig(config: LovelaceHeaderFooterConfig): void;
}
interface LovelaceRowEditor extends LovelaceGenericElementEditor {
    setConfig(config: LovelaceRowConfig): void;
}
interface LovelacePictureElementEditor extends LovelaceGenericElementEditor {
    setConfig(config: LovelaceElementConfig): void;
}
interface LovelaceGenericElementEditor<C = any> extends HTMLElement {
    hass?: HomeAssistant;
    lovelace?: LovelaceConfig;
    context?: C;
    schema?: any;
    setConfig(config: any): void;
    focusYamlEditor?: () => void;
}
interface LovelaceCardFeature extends HTMLElement {
    hass?: HomeAssistant;
    /** @deprecated Use `context` instead */
    stateObj?: HassEntity;
    context?: LovelaceCardFeatureContext;
    setConfig(config: LovelaceCardFeatureConfig): any;
    color?: string;
    position?: LovelaceCardFeaturePosition;
}
interface LovelaceCardFeatureConstructor extends Constructor<LovelaceCardFeature> {
    getStubConfig?: (hass: HomeAssistant, context?: LovelaceCardFeatureContext) => LovelaceCardFeatureConfig;
    getConfigElement?: () => LovelaceCardFeatureEditor;
    getConfigForm?: () => {
        schema: HaFormSchema[];
        assertConfig?: (config: LovelaceCardConfig) => void;
    };
    isSupported?: (stateObj?: HassEntity) => boolean;
}
interface LovelaceCardFeatureEditor extends LovelaceGenericElementEditor {
    setConfig(config: LovelaceCardFeatureConfig): void;
}
interface LovelaceHeadingBadge extends HTMLElement {
    hass?: HomeAssistant;
    preview?: boolean;
    setConfig(config: LovelaceHeadingBadgeConfig): any;
}
interface LovelaceHeadingBadgeConstructor extends Constructor<LovelaceHeadingBadge> {
    getStubConfig?: (hass: HomeAssistant, stateObj?: HassEntity) => LovelaceHeadingBadgeConfig;
    getConfigElement?: () => LovelaceHeadingBadgeEditor;
    getConfigForm?: () => {
        schema: HaFormSchema[];
        assertConfig?: (config: LovelaceCardConfig) => void;
    };
}
interface LovelaceHeadingBadgeEditor extends LovelaceGenericElementEditor {
    setConfig(config: LovelaceHeadingBadgeConfig): void;
}

interface LovelaceCardConfig {
    index?: number;
    view_index?: number;
    view_layout?: any;
    /** @deprecated Use `grid_options` instead */
    layout_options?: LovelaceLayoutOptions;
    grid_options?: LovelaceGridOptions;
    type: string;
    [key: string]: any;
    visibility?: Condition[];
    disabled?: boolean;
}

declare const DEFAULT_SECTION_BACKGROUND_OPACITY = 50;
interface LovelaceSectionBackgroundConfig {
    color?: string;
    opacity?: number;
}
interface LovelaceBaseSectionConfig {
    visibility?: Condition[];
    disabled?: boolean;
    column_span?: number;
    row_span?: number;
    background?: boolean | LovelaceSectionBackgroundConfig;
    /**
     * @deprecated Use heading card instead.
     */
    title?: string;
    theme?: string;
}
interface LovelaceSectionConfig extends LovelaceBaseSectionConfig {
    type?: string;
    cards?: LovelaceCardConfig[];
}
interface LovelaceStrategySectionConfig extends LovelaceBaseSectionConfig {
    strategy: LovelaceStrategyConfig;
}
type LovelaceSectionRawConfig = LovelaceSectionConfig | LovelaceStrategySectionConfig;
declare function resolveSectionBackground(background: boolean | LovelaceSectionBackgroundConfig | undefined): LovelaceSectionBackgroundConfig | undefined;
declare function isStrategySection(section: LovelaceSectionRawConfig): section is LovelaceStrategySectionConfig;

interface ShowViewConfig {
    user?: string;
}
interface LovelaceViewBackgroundConfig {
    image?: string | MediaSelectorValue;
    opacity?: number;
    size?: "auto" | "cover" | "contain";
    alignment?: "top left" | "top center" | "top right" | "center left" | "center" | "center right" | "bottom left" | "bottom center" | "bottom right";
    repeat?: "repeat" | "no-repeat";
    attachment?: "scroll" | "fixed";
}
interface LovelaceViewHeaderConfig {
    card?: LovelaceCardConfig;
    layout?: "start" | "center" | "responsive";
    badges_position?: "bottom" | "top";
    badges_wrap?: "wrap" | "scroll";
}
declare const DEFAULT_FOOTER_MAX_WIDTH_PX = 600;
interface LovelaceViewFooterConfig {
    card?: LovelaceCardConfig;
    max_width?: number;
}
interface LovelaceViewSidebarConfig {
    sections?: LovelaceSectionConfig[];
    content_label?: string;
    sidebar_label?: string;
    visibility?: Condition[];
}
interface LovelaceBaseViewConfig {
    index?: number;
    title?: string;
    path?: string;
    icon?: string;
    show_icon_and_title?: boolean;
    theme?: string;
    panel?: boolean;
    background?: string | LovelaceViewBackgroundConfig;
    visible?: boolean | ShowViewConfig[];
    subview?: boolean;
    back_path?: string;
    max_columns?: number;
    dense_section_placement?: boolean;
    top_margin?: boolean;
}
interface LovelaceViewConfig extends LovelaceBaseViewConfig {
    type?: string;
    badges?: (string | Partial<LovelaceBadgeConfig>)[];
    cards?: LovelaceCardConfig[];
    sections?: LovelaceSectionRawConfig[];
    header?: LovelaceViewHeaderConfig;
    footer?: LovelaceViewFooterConfig;
    sidebar?: LovelaceViewSidebarConfig;
}
interface LovelaceStrategyViewConfig extends LovelaceBaseViewConfig {
    strategy: LovelaceStrategyConfig;
}
type LovelaceViewRawConfig = LovelaceViewConfig | LovelaceStrategyViewConfig;
declare function isStrategyView(view: LovelaceViewRawConfig): view is LovelaceStrategyViewConfig;
declare const computeViewTitle: (view: LovelaceBaseViewConfig, index: number) => string;
declare const computeViewIcon: (view: LovelaceBaseViewConfig) => string;

interface LovelaceDashboardBaseConfig {
}
interface LovelaceConfig extends LovelaceDashboardBaseConfig {
    background?: string;
    views: LovelaceViewRawConfig[];
}
interface LovelaceDashboardStrategyConfig extends LovelaceDashboardBaseConfig {
    strategy: LovelaceStrategyConfig;
}
interface LegacyLovelaceConfig extends LovelaceConfig {
    resources?: LovelaceResource[];
}
type LovelaceRawConfig = LovelaceConfig | LovelaceDashboardStrategyConfig;
declare function isStrategyDashboard(config: LovelaceRawConfig): config is LovelaceDashboardStrategyConfig;
declare const fetchConfig: (conn: Connection, urlPath: string | null, force: boolean) => Promise<LovelaceRawConfig>;
declare const saveConfig: (hass: HomeAssistant, urlPath: string | null, config: LovelaceRawConfig) => Promise<void>;
declare const deleteConfig: (hass: HomeAssistant, urlPath: string | null) => Promise<void>;

/**
 * @element ha-row-item
 * @extends {LitElement}
 *
 * @summary
 * Generic row layout primitive. Renders a horizontal row with optional
 * leading/trailing slots and a stacked middle column (headline +
 * supporting text). Role-agnostic; use `ha-list-item-base` and its
 * subclasses for list semantics.
 *
 * @slot start - Leading container (usually icon/avatar).
 * @slot end - Trailing container (usually meta/chevron).
 * @slot headline - Primary text (overrides the `headline` attribute).
 * @slot supporting-text - Secondary text (overrides the `supporting-text` attribute).
 * @slot content - Escape hatch: replaces the entire middle column (headline + supporting-text).
 *
 * @csspart base - The outer container.
 * @csspart start - The leading slot wrapper.
 * @csspart content - The middle column wrapper.
 * @csspart headline - The headline wrapper.
 * @csspart supporting-text - The supporting-text wrapper.
 * @csspart end - The trailing slot wrapper.
 *
 * @cssprop --ha-row-item-padding-block - Vertical padding inside the row.
 * @cssprop --ha-row-item-padding-inline - Horizontal padding inside the row.
 * @cssprop --ha-row-item-gap - Gap between start, content, and end.
 * @cssprop --ha-row-item-min-height - Minimum row height.
 *
 * @attr {string} headline - Primary text. Overridden by the `headline` slot.
 * @attr {string} supporting-text - Secondary text. Overridden by the `supporting-text` slot.
 * @attr {boolean} disabled - Dims the row and blocks pointer events.
 */
declare class HaRowItem extends LitElement {
    headline?: string;
    supportingText?: string;
    disabled: boolean;
    protected readonly _slotController: HasSlotController;
    private _hasStart;
    private _hasEnd;
    private _onSlotChange;
    protected render(): TemplateResult;
    protected _renderBase(inner: TemplateResult): TemplateResult;
    protected _renderInner(): TemplateResult;
    protected _renderDefaultContent(): TemplateResult;
    static styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-row-item": HaRowItem;
    }
}

/**
 * @element ha-list-item-base
 * @extends {HaRowItem}
 *
 * @summary
 * Non-interactive list row (role `listitem`). Base class for
 * `ha-list-item-button`, `ha-list-item-option`.
 *
 * @cssprop --ha-list-item-focus-radius - Focus outline border-radius.
 * @cssprop --ha-list-item-focus-width - Focus outline width (steady state).
 * @cssprop --ha-list-item-focus-width-start - Focus outline width at the start of the focus-in animation.
 * @cssprop --ha-list-item-focus-offset - Focus outline offset.
 * @cssprop --ha-list-item-focus-background - Background color applied on keyboard focus.
 *
 * @attr {boolean} interactive - Opts the row into the parent list's roving tabindex. Interactive subclasses set this automatically.
 */
declare class HaListItemBase extends HaRowItem {
    /**
     * Whether the item takes keyboard focus. Read by the parent list to decide
     * if it should be part of the roving-tabindex ring. Interactive subclasses
     * (`ha-list-item-button`, `-option`, `-todo`) override the default to `true`.
     * For the plain base row, set the `interactive` attribute to opt into focus
     * (useful for sortable rows where you need keyboard reorder but no click
     * action).
     */
    interactive: boolean;
    /** Host `role` attribute. Subclasses override. */
    protected readonly defaultRole: string;
    connectedCallback(): void;
    disconnectedCallback(): void;
    /**
     * Activate the item (Enter/Space from the parent list). Default dispatches
     * a click on the host. Subclasses that wrap a native element (e.g. `<a>`)
     * override this to click the inner element so browser default actions
     * (like anchor navigation) fire.
     */
    activate(): void;
    static styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-list-item-base": HaListItemBase;
    }
}

interface HaListSelectedDetail {
    index: number | Set<number>;
    diff?: {
        added: Set<number>;
        removed: Set<number>;
    };
    value?: string | string[];
}
interface HaListActivatedDetail {
    index: number;
    item: HaListItemBase;
}
interface HaListItemRegistrationDetail {
    item: HaListItemBase;
}
declare global {
    interface HASSDomEvents {
        "ha-list-selected": HaListSelectedDetail;
        "ha-list-activated": HaListActivatedDetail;
        "ha-list-item-register": HaListItemRegistrationDetail;
        "ha-list-item-unregister": HaListItemRegistrationDetail;
    }
}

type BadgeType = "badge" | "button";
declare class HaBadge extends LitElement {
    type: BadgeType;
    label?: string;
    iconOnly: boolean;
    protected render(): lit_html.TemplateResult<1>;
    static styles: lit.CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-badge": HaBadge;
    }
}

declare const DISPLAY_TYPES: readonly ["minimal", "standard", "complete"];
type DisplayType = (typeof DISPLAY_TYPES)[number];
declare class HuiEntityBadge extends LitElement implements LovelaceBadge {
    static getConfigElement(): Promise<LovelaceBadgeEditor>;
    static getStubConfig(hass: HomeAssistant, entities: string[], entitiesFallback: string[]): EntityBadgeConfig;
    hass?: HomeAssistant;
    protected _config?: EntityBadgeConfig;
    setConfig(config: EntityBadgeConfig): void;
    get hasAction(): boolean;
    private _computeStateColor;
    private _getImageUrl;
    protected render(): typeof nothing | lit_html.TemplateResult<1>;
    private _handleAction;
    static styles: lit.CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-entity-badge": HuiEntityBadge;
    }
}

interface EntityFilterBadgeConfig extends LovelaceBadgeConfig {
    type: "entity-filter";
    entities: (EntityFilterEntityConfig | string)[];
    state_filter?: LegacyStateFilter[];
    conditions?: Condition[];
}
interface ErrorBadgeConfig extends LovelaceBadgeConfig {
    error: string;
    origConfig: LovelaceBadgeConfig;
}
interface StateLabelBadgeConfig extends LovelaceBadgeConfig {
    entity: string;
    name?: string;
    icon?: string;
    image?: string;
    show_name?: boolean;
    tap_action?: ActionConfig;
    hold_action?: ActionConfig;
    double_tap_action?: ActionConfig;
}
interface ShortcutBadgeConfig extends LovelaceBadgeConfig {
    text?: string;
    icon?: string;
    color?: string;
    tap_action?: ActionConfig;
    hold_action?: ActionConfig;
    double_tap_action?: ActionConfig;
}
interface EntityBadgeConfig extends LovelaceBadgeConfig {
    type: "entity";
    entity?: string;
    name?: string | EntityNameItem | EntityNameItem[];
    icon?: string;
    color?: string;
    show_name?: boolean;
    show_state?: boolean;
    show_icon?: boolean;
    show_entity_picture?: boolean;
    state_content?: string | string[];
    tap_action?: ActionConfig;
    hold_action?: ActionConfig;
    double_tap_action?: ActionConfig;
    /**
     * @deprecated use `show_state`, `show_name`, `icon_type`
     */
    display_type?: DisplayType;
}
interface EnergyTotalBadgeConfig extends LovelaceBadgeConfig {
    title?: string;
    collection_key?: string;
}
interface PowerTotalBadgeConfig extends EnergyTotalBadgeConfig {
    type: "power-total";
}
interface WaterTotalBadgeConfig extends EnergyTotalBadgeConfig {
    type: "water-total";
}
interface GasTotalBadgeConfig extends EnergyTotalBadgeConfig {
    type: "gas-total";
}

interface CardSuggestion<T extends LovelaceCardConfig = LovelaceCardConfig> {
    label?: string;
    config: T;
}
interface CardSuggestionProvider<T extends LovelaceCardConfig = LovelaceCardConfig> {
    getEntitySuggestion(hass: HomeAssistant, entityId: string): CardSuggestion<T> | CardSuggestion<T>[] | null;
}

interface YamlChangedEvent extends Event {
    detail: {
        yaml: string;
    };
}
interface GUIModeChangedEvent {
    guiMode: boolean;
    guiModeAvailable: boolean;
}
interface ViewEditEvent extends Event {
    detail: {
        config: LovelaceViewConfig;
        valid?: boolean;
    };
}
interface ViewVisibilityChangeEvent {
    visible: ShowViewConfig[];
}
interface ConfigValue {
    format: "json" | "yaml";
    value?: string | LovelaceCardConfig;
}
interface ConfigError {
    type: string;
    message: string;
}
interface EntitiesEditorEvent<T extends EntityConfig = EntityConfig> extends CustomEvent {
    detail: {
        entities?: T[];
        item?: any;
    };
    target: EventTarget | null;
}
interface EditorTarget extends EventTarget {
    value?: string;
    index?: number;
    checked?: boolean;
    configValue?: string;
    type?: HTMLInputElement["type"];
    config: ActionConfig;
}
interface Card {
    type: string;
    name?: string;
    description?: string;
    showElement?: boolean;
    isCustom?: boolean;
    isSuggested?: boolean;
    isEnergy?: boolean;
}
interface Badge {
    type: string;
    name?: string;
    description?: string;
    showElement?: boolean;
    isCustom?: boolean;
    isSuggested?: boolean;
}
interface HeaderFooter {
    type: LovelaceHeaderFooterConfig["type"];
    icon?: string;
}
interface CardPickTarget extends EventTarget {
    config: LovelaceCardConfig;
}
interface BadgePickTarget extends EventTarget {
    config: LovelaceBadgeConfig;
}
interface SubElementEditorConfig {
    index?: number;
    elementConfig?: LovelaceRowConfig | LovelaceHeaderFooterConfig | LovelaceCardFeatureConfig | LovelaceElementConfig | LovelaceHeadingBadgeConfig;
    saveElementConfig?: (elementConfig: any) => void;
    context?: any;
    type: "header" | "footer" | "row" | "feature" | "element" | "heading-badge";
}
interface EditSubElementEvent<T = any, C = any> {
    type: SubElementEditorConfig["type"];
    context?: C;
    config: T;
    saveConfig: (config: T) => void;
}
interface EditDetailElementEvent {
    subElementConfig: SubElementEditorConfig;
}

interface LovelaceConditionEditorConstructor {
    defaultConfig?: Condition;
    validateUIConfig?: (condition: Condition, hass: HomeAssistant) => void;
}

interface LovelaceStrategy<T = any> {
    generate(config: LovelaceStrategyConfig, hass: HomeAssistant): Promise<T>;
    getConfigElement?: () => LovelaceStrategyEditor;
    noEditor?: boolean;
    configRequired?: boolean;
}
interface LovelaceDashboardStrategy extends LovelaceStrategy<LovelaceConfig> {
}
/**
 * Optional static `getCreateSuggestions` on dashboard strategy classes.
 * Used when opening the dashboard create dialog; see `loadDashboardStrategyWithCreateSuggestions`.
 */
type LovelaceDashboardStrategyGetCreateSuggestions = (hass: HomeAssistant) => LovelaceDashboardSuggestions | Promise<LovelaceDashboardSuggestions>;
interface LovelaceViewStrategy extends LovelaceStrategy<LovelaceViewConfig> {
}
interface LovelaceSectionStrategy extends LovelaceStrategy<LovelaceSectionConfig> {
}
interface LovelaceStrategyEditor extends LovelaceGenericElementEditor {
    setConfig(config: LovelaceStrategyConfig): void;
}

interface CustomCardSuggestion<T extends LovelaceCardConfig = LovelaceCardConfig> {
    label?: string;
    config: T;
}
interface CustomCardEntry {
    type: string;
    name?: string;
    description?: string;
    preview?: boolean;
    documentationURL?: string;
    getEntitySuggestion?: (hass: HomeAssistant, entityId: string) => CustomCardSuggestion | CustomCardSuggestion[] | null;
}
interface CustomBadgeEntry {
    type: string;
    name?: string;
    description?: string;
    preview?: boolean;
    documentationURL?: string;
}
interface CustomCardFeatureEntry {
    type: string;
    name?: string;
    /** @deprecated Use `isSupported` */
    supported?: (stateObj: HassEntity) => boolean;
    isSupported?: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => boolean;
    configurable?: boolean;
}
interface CustomCardsWindow {
    customCards?: CustomCardEntry[];
    customCardFeatures?: CustomCardFeatureEntry[];
    customBadges?: CustomBadgeEntry[];
    /**
     * @deprecated Use customCardFeatures
     */
    customTileFeatures?: CustomCardFeatureEntry[];
}
declare const CUSTOM_TYPE_PREFIX = "custom:";
declare const customCards: CustomCardEntry[];
declare const getCustomCardFeatures: () => CustomCardFeatureEntry[];
declare const customBadges: CustomBadgeEntry[];
declare const getCustomCardEntry: (type: string) => CustomCardEntry | undefined;
declare const getCustomBadgeEntry: (type: string) => CustomBadgeEntry | undefined;
declare const isCustomType: (type: string) => boolean;
declare const stripCustomPrefix: (type: string) => string;

type LovelaceStrategyConfigType = "dashboard" | "view" | "section";

interface CustomStrategyEntry {
    type: string;
    name?: string;
    description?: string;
    documentationURL?: string;
    strategyType: LovelaceStrategyConfigType;
}
interface CustomStrategiesWindow {
    customStrategies?: CustomStrategyEntry[];
}
declare const customStrategies: CustomStrategyEntry[];
declare const getCustomStrategiesForType: (strategyType: LovelaceStrategyConfigType) => CustomStrategyEntry[];
declare const getCustomStrategyEntry: (type: string, strategyType: LovelaceStrategyConfigType) => CustomStrategyEntry | undefined;

interface CustomIcon {
    path: string;
    secondaryPath?: string;
    viewBox?: string;
}
interface CustomIconListItem {
    name: string;
    keywords?: string[];
}
interface CustomIconHelpers {
    getIcon: (name: string) => Promise<CustomIcon>;
    getIconList?: () => Promise<CustomIconListItem[]>;
}
interface CustomIconsWindow {
    customIcons?: Record<string, CustomIconHelpers>;
}
declare const customIcons: Record<string, CustomIconHelpers>;

interface CustomIconsetsWindow {
    customIconsets?: Record<string, (name: string) => Promise<CustomIcon>>;
}
declare const customIconsets: Record<string, (name: string) => Promise<CustomIcon>>;

declare global {
    interface Window extends CustomCardsWindow, CustomStrategiesWindow, CustomIconsWindow, CustomIconsetsWindow {
    }
}

type _HassContextTypes = typeof __data_context_index;
type _HassContextValueTypes = {
    [K in keyof _HassContextTypes]: ContextType<_HassContextTypes[K]>;
};
type HassContext = {
    /**
     * Entity, device, area, and floor registries
     */
    hassRegistries: _HassContextValueTypes["registriesContext"];
    /**
     * Live map of all entity states, keyed by entity ID.
     */
    states: _HassContextValueTypes["statesContext"];
    /**
     * Provides the map of all available Home Assistant services, keyed by domain.
     */
    services: _HassContextValueTypes["servicesContext"];
    /**
     * i18n state: active language, locale settings, the `localize` function, translation metadata, and the
     * `loadBackendTranslation` / `loadFragmentTranslation` loaders.
     */
    hassInternationalization: _HassContextValueTypes["internationalizationContext"];
    /**
     * HTTP and WebSocket API surface: `callService`, `callApi`,
     * `callApiRaw`, `callWS`, `sendWS`, `fetchWithAuth`, and `hassUrl`.
     */
    hassApi: _HassContextValueTypes["apiContext"];
    /**
     * WebSocket connection state: `connection`, `connected`, and `debugConnection`.
     */
    hassConnection: _HassContextValueTypes["connectionContext"];
    /**
     * UI preferences and global UI state: themes, selected theme,
     * panels, sidebar mode, kiosk mode, shortcuts, vibration, and
     * `suspendWhenHidden`.
     */
    hassUi: _HassContextValueTypes["uiContext"];
    /**
     * HA core configuration together with user session data:
     * `auth`, `config` (core HA config), `user`, `userData`, and `systemData`.
     */
    hassConfig: _HassContextValueTypes["configContext"];
    /**
     * Entity formatting functions: `formatEntityState`, `formatEntityStateToParts`,
     * `formatEntityAttributeValue`, `formatEntityAttributeValueToParts`,
     * `formatEntityAttributeName`, and `formatEntityName`.
     */
    hassFormatters: _HassContextValueTypes["formattersContext"];
    /**
     * Map of all entities in the entity registry, keyed by entity ID.
     */
    entities: _HassContextValueTypes["entitiesContext"];
    /**
     * Map of all devices in the device registry, keyed by device ID.
     */
    devices: _HassContextValueTypes["devicesContext"];
    /**
     * Map of all areas in the area registry, keyed by area ID.
     */
    areas: _HassContextValueTypes["areasContext"];
    /**
     * Map of all floors in the floor registry, keyed by floor ID.
     */
    floors: _HassContextValueTypes["floorsContext"];
    /**
     * Lazy contexts are not subscribed to by default. They are only subscribed to when a provider is consumed with at least one consumer.
     */
    /**
     * Lazy loaded labels registry, keyed by label ID.
     */
    labels: _HassContextValueTypes["labelsContext"];
    /**
     * Lazy loaded entity registry array
     */
    extendedEntities: _HassContextValueTypes["fullEntitiesContext"];
    /**
     * Lazy loaded config entries array
     */
    configEntries: _HassContextValueTypes["configEntriesContext"];
    /**
     * Lazy loaded integration manifests, keyed by domain.
     */
    manifests: _HassContextValueTypes["manifestsContext"];
    /** @deprecated Use `connectionContext` instead. */
    connection: _HassContextValueTypes["connectionSingleContext"];
    /** @deprecated Use `internationalizationContext` instead. */
    localize: _HassContextValueTypes["localizeContext"];
    /** @deprecated Use `internationalizationContext` instead. */
    locale: _HassContextValueTypes["localeContext"];
    /** @deprecated Use `configContext` instead. */
    config: _HassContextValueTypes["configSingleContext"];
    /** @deprecated Use `uiContext` instead. */
    themes: _HassContextValueTypes["themesContext"];
    /** @deprecated Use `uiContext` instead. */
    selectedTheme: _HassContextValueTypes["selectedThemeContext"];
    /** @deprecated Use `configContext` instead. */
    user: _HassContextValueTypes["userContext"];
    /** @deprecated Use `configContext` instead. */
    userData: _HassContextValueTypes["userDataContext"];
    /** @deprecated Use `uiContext` instead. */
    panels: _HassContextValueTypes["panelsContext"];
    /** @deprecated Use `configContext` instead. */
    auth: _HassContextValueTypes["authContext"];
};
type HassContextKeys = keyof HassContext;

export { AREA_CONTROL_DOMAINS, COUNTER_ACTIONS, CUSTOM_TYPE_PREFIX, DEFAULT_FOOTER_MAX_WIDTH_PX, DEFAULT_SECTION_BACKGROUND_OPACITY, LAWN_MOWER_COMMANDS, LOVELACE_BUILTIN_DASHBOARD_STRATEGY_TYPES, MEDIA_PLAYER_PLAYBACK_CONTROLS, PREVIEW_CLICK_CALLBACK, TIMESTAMP_RENDERING_FORMATS, VACUUM_COMMANDS, computeViewIcon, computeViewTitle, createDashboard, createResource, customBadges, customCards, customIcons, customIconsets, customStrategies, deleteConfig, deleteDashboard, deleteResource, ensureBadgeConfig, fetchConfig, fetchDashboards, fetchLovelaceInfo, fetchResources, getCustomBadgeEntry, getCustomCardEntry, getCustomCardFeatures, getCustomStrategiesForType, getCustomStrategyEntry, isCustomType, isStrategyDashboard, isStrategySection, isStrategyView, resolveSectionBackground, saveConfig, stripCustomPrefix, updateDashboard, updateResource };
export type { ActionConfig, ActionHandlerDetail, ActionHandlerEvent, ActionHandlerOptions, ActionsConfig, AlarmModesCardFeatureConfig, AlarmPanelCardConfig, AlarmPanelCardConfigState, AreaCardConfig, AreaCardDisplayType, AreaControl, AreaControlDomain, AreaControlsCardFeatureConfig, AssistActionConfig, Badge, BadgePickTarget, BarGaugeCardFeatureConfig, BaseActionConfig, ButtonCardConfig, ButtonCardData, ButtonCardFeatureConfig, CalendarCardConfig, CallServiceActionConfig, Card, CardPickTarget, CardSuggestion, CardSuggestionProvider, ClimateFanModesCardFeatureConfig, ClimateHvacModesCardFeatureConfig, ClimatePresetModesCardFeatureConfig, ClimateSwingHorizontalModesCardFeatureConfig, ClimateSwingModesCardFeatureConfig, ClockCardConfig, Condition, ConditionalBaseConfig, ConditionalCardConfig, ConditionalElementConfig, ConfigEntity, ConfigError, ConfigValue, ConfirmationRestrictionConfig, Constructor, CounterActions, CounterActionsCardFeatureConfig, CoverOpenCloseCardFeatureConfig, CoverPositionCardFeatureConfig, CoverPositionFavoriteCardFeatureConfig, CoverTiltCardFeatureConfig, CoverTiltFavoriteCardFeatureConfig, CoverTiltPositionCardFeatureConfig, CustomActionConfig, CustomBadgeEntry, CustomCardEntry, CustomCardFeatureEntry, CustomCardSuggestion, CustomCardsWindow, CustomIcon, CustomIconHelpers, CustomIconListItem, CustomIconsWindow, CustomIconsetsWindow, CustomStrategiesWindow, CustomStrategyEntry, DateSetCardFeatureConfig, DiscoveredDevicesCardConfig, DistributionCardConfig, DistributionEntityConfig, EditDetailElementEvent, EditSubElementEvent, EditorTarget, EmptyStateButtonConfig, EmptyStateCardConfig, EnergyCarbonGaugeCardConfig, EnergyCardBaseConfig, EnergyCardConfig, EnergyCardSankeyConfig, EnergyDateSelectorCardConfig, EnergyDevicesDetailGraphCardConfig, EnergyDevicesGraphCardConfig, EnergyDistributionCardConfig, EnergyGasGraphCardConfig, EnergyGridBalanceCardConfig, EnergyGridNeutralityGaugeCardConfig, EnergySankeyCardConfig, EnergySelfSufficiencyGaugeCardConfig, EnergySolarGaugeCardConfig, EnergySolarGraphCardConfig, EnergySourcesTableCardConfig, EnergyUsageGraphCardConfig, EnergyWaterGraphCardConfig, EntitiesCardConfig, EntitiesCardEntityConfig, EntitiesEditorEvent, EntityBadgeConfig, EntityCardConfig, EntityFilterBadgeConfig, EntityFilterCardConfig, ErrorBadgeConfig, ErrorCardConfig, FanDirectionCardFeatureConfig, FanOscillateCardFeatureConfig, FanPresetModesCardFeatureConfig, FanSpeedCardFeatureConfig, ForecastResolution, GUIModeChangedEvent, GasTotalBadgeConfig, GaugeCardConfig, GaugeSegment, GeoLocationSourceConfig, GlanceCardConfig, GlanceConfigEntity, GraphEntityConfig, GridCardConfig, HaFormBaseSchema, HaFormBooleanData, HaFormBooleanSchema, HaFormConstantSchema, HaFormData, HaFormDataContainer, HaFormElement, HaFormExpandableSchema, HaFormFloatData, HaFormFloatSchema, HaFormGridSchema, HaFormIntegerData, HaFormIntegerSchema, HaFormMultiSelectData, HaFormMultiSelectSchema, HaFormOptionalActionsSchema, HaFormSchema, HaFormSelectData, HaFormSelectSchema, HaFormSelector, HaFormStringData, HaFormStringSchema, HaFormTimeData, HaFormTimeSchema, HaListActivatedDetail, HaListItemRegistrationDetail, HaListSelectedDetail, HassContext, HassContextKeys, HeaderFooter, HeadingCardConfig, HistoryGraphCardConfig, HomeAssistant, HomeSummaryCard, HumidifierCardConfig, HumidifierModesCardFeatureConfig, HumidifierToggleCardFeatureConfig, IconElementConfig, IframeCardConfig, ImageElementConfig, LawnMowerCommand, LawnMowerCommandsCardFeatureConfig, LegacyLovelaceConfig, LightBrightnessCardFeatureConfig, LightCardConfig, LightColorFavoritesCardFeatureConfig, LightColorTempCardFeatureConfig, LockCommandsCardFeatureConfig, LockOpenDoorCardFeatureConfig, LogbookCardConfig, Lovelace, LovelaceBadge, LovelaceBadgeConfig, LovelaceBadgeConstructor, LovelaceBadgeEditor, LovelaceBaseSectionConfig, LovelaceBaseViewConfig, LovelaceBuiltinDashboardStrategyType, LovelaceCard, LovelaceCardConfig, LovelaceCardConstructor, LovelaceCardEditor, LovelaceCardFeature, LovelaceCardFeatureConfig, LovelaceCardFeatureConstructor, LovelaceCardFeatureContext, LovelaceCardFeatureEditor, LovelaceCardFeaturePosition, LovelaceConditionEditorConstructor, LovelaceConfig, LovelaceConfigForm, LovelaceDashboard, LovelaceDashboardBaseConfig, LovelaceDashboardCreateParams, LovelaceDashboardMutableParams, LovelaceDashboardStrategy, LovelaceDashboardStrategyConfig, LovelaceDashboardStrategyGetCreateSuggestions, LovelaceDashboardStrategyTypeId, LovelaceDashboardSuggestions, LovelaceElement, LovelaceElementConfig, LovelaceElementConstructor, LovelaceGenericElementEditor, LovelaceGridOptions, LovelaceHeaderFooter, LovelaceHeaderFooterConstructor, LovelaceHeaderFooterEditor, LovelaceHeadingBadge, LovelaceHeadingBadgeConstructor, LovelaceHeadingBadgeEditor, LovelaceInfo, LovelaceLayoutOptions, LovelacePictureElementEditor, LovelaceRawConfig, LovelaceResource, LovelaceResourcesMutableParams, LovelaceRowConstructor, LovelaceRowEditor, LovelaceSectionBackgroundConfig, LovelaceSectionConfig, LovelaceSectionRawConfig, LovelaceSectionStrategy, LovelaceStorageDashboard, LovelaceStrategy, LovelaceStrategyConfig, LovelaceStrategyEditor, LovelaceStrategySectionConfig, LovelaceStrategyViewConfig, LovelaceViewBackgroundConfig, LovelaceViewConfig, LovelaceViewFooterConfig, LovelaceViewHeaderConfig, LovelaceViewRawConfig, LovelaceViewSidebarConfig, LovelaceViewStrategy, LovelaceYamlDashboard, MapCardConfig, MapEntityConfig, MarkdownCardConfig, MediaControlCardConfig, MediaPlayerPlaybackCardFeatureConfig, MediaPlayerPlaybackControl, MediaPlayerSoundModeCardFeatureConfig, MediaPlayerSourceCardFeatureConfig, MediaPlayerVolumeButtonsCardFeatureConfig, MediaPlayerVolumeSliderCardFeatureConfig, MoreInfoActionConfig, NavigateActionConfig, NoActionConfig, NumericInputCardFeatureConfig, PictureCardConfig, PictureElementsCardConfig, PictureEntityCardConfig, PictureGlanceCardConfig, PictureGlanceEntityConfig, PlantAttributeTarget, PlantStatusCardConfig, PowerSankeyCardConfig, PowerSourcesGraphCardConfig, PowerTotalBadgeConfig, PrecipitationForecastCardFeatureConfig, RepairsCardConfig, RestrictionConfig, SchemaUnion, SelectOptionsCardFeatureConfig, SensorCardConfig, ServiceButtonElementConfig, SeverityConfig, ShortcutBadgeConfig, ShortcutCardConfig, ShowViewConfig, StackCardConfig, StateBadgeElementConfig, StateIconElementConfig, StateLabelBadgeConfig, StateLabelElementConfig, StatisticCardConfig, StatisticsGraphCardConfig, SubElementEditorConfig, TargetHumidityCardFeatureConfig, TargetTemperatureCardFeatureConfig, TemperatureForecastCardFeatureConfig, ThermostatCardConfig, TileCardConfig, TimestampRenderingFormat, TodoListCardConfig, ToggleActionConfig, ToggleCardFeatureConfig, ToggleGroupCardConfig, TrendGraphCardFeatureConfig, UpdateActionsCardFeatureConfig, UpdatesCardConfig, UrlActionConfig, VacuumCommand, VacuumCommandsCardFeatureConfig, ValveOpenCloseCardFeatureConfig, ValvePositionCardFeatureConfig, ValvePositionFavoriteCardFeatureConfig, ViewEditEvent, ViewVisibilityChangeEvent, WaterFlowSankeyCardConfig, WaterHeaterOperationModesCardFeatureConfig, WaterSankeyCardConfig, WaterTotalBadgeConfig, WeatherForecastCardConfig, YamlChangedEvent };
