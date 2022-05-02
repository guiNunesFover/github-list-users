import { Theme } from './symbols';
import { ThemeEnum } from './theme.enum';

export const darkTheme: Theme = 
{
    name: ThemeEnum.dark,
    properties: 
    {
        // Pages
        '--page-background-100': '#272C35', // Background
        '--page-font-100': '#8C8C8C', // Font
        '--page-font-200': '#fff', // Font title

        // Menu top
        '--menu-top-background-100': '#1B1F26', // Background
        '--menu-top-background-200': '#2C2ECE', // Background
        '--menu-top-font-100': '#CCCCCC', // Title
        '--menu-top-font-200': '#AAAAAA', // Descriptions

        // Menu lateral
        '--menu-lateral-background-100': '#323843', // Background
        '--menu-lateral-font-100': '#fff', // Title - Item enabled
        '--menu-lateral-font-200': '#747983', // Descriptions - Item disabled

        // Buttons - Primary
        '--button-primary-background-100': '#3B67F2', // Primary
        '--button-primary-background-200': '#2C2ECE', // Primary hover
        '--button-primary-background-300': '#2C2ECE20', // Primary light
        '--button-primary-focus-100': '#9dc1fb', // Primary focus && disabled
        '--button-primary-font-100': '#fff', // Primary font
        // Buttons - Secondary
        '--button-secondary-background-100': '#9f9f9f', // Secondary
        '--button-secondary-background-200': '#5a6268', // Secondary hover
        '--button-secondary-background-300': '#5a626820', // Secondary light
        '--button-secondary-focus-100': '#828a9180', // Secondary focus && disabled
        '--button-secondary-font-100': '#fff', // Secondary font
        // Buttons - Danger
        '--button-danger-background-100': '#dc3545', // Danger
        '--button-danger-background-200': '#c82333', // Danger hover
        '--button-danger-background-300': '#c8233320', // Danger light
        '--button-danger-focus-100': '#FB9D9D', // Danger focus && disabled
        '--button-danger-font-100': '#fff', // Danger font
        // Buttons - Warning
        '--button-warning-background-100': '#ff9966', // Warning
        '--button-warning-background-200': '#F47A3D', // Warning hover
        '--button-warning-background-300': '#F47A3D20', // Warning light
        '--button-warning-focus-100': '#FBCC9D', // Warning focus && disabled
        '--button-warning-font-100': '#fff', // Warning font
        // Buttons - Success
        '--button-success-background-100': '#1eb600', // Warning
        '--button-success-background-200': '#147a00', // Warning hover
        '--button-success-background-300': '#147a0020', // Warning light
        '--button-success-focus-100': '#FBCC9D50', // Warning focus && disabled
        '--button-success-font-100': '#fff', // Warning font

        // Inputs
        '--input-background-100': '#1B1F26', // Primary
        '--input-border-100': '#3f4b5b', // Border
        '--input-focus-100': '#9dc1fb', // Focus
        '--input-font-100': '#fff', // Font
        '--input-placeholder-100': '#6f737c', // Placeholder
        '--input-required-100': '#dc3545', // Label required
        '--input-label-100': '#fff', // Label
        '--input-error-100': '#dc3545', // Input error
        '--input-error-background-100': '#dc354520', // Input error
        '--input-success-100': '#3B67F2', // Input success
        '--input-success-background-100': '#3B67F220', // Input success

        // Datepicker
        '--datepicker-background-header-100': '#1B1F26', // Background header
        '--datepicker-background-100': '#323843', // Background calender
        '--datepicker-font-100': '#CCCCCC', // Font
        '--datepicker-font-200': '#fff', // Font houver
        '--datepicker-houver-100': '#1B1F26', // Houver
        '--datepicker-border-100': '#3f4b5b', // Border
        '--datepicker-active-100': '#1B1F26', // Active
        '--datepicker-range-selected-background-100': '#1b1f25', // Active

        // Dropdown
        '--dropdown-multi-item-background-100': '#323843', // Item multi selected
        '--dropdown-multi-item-font-100': '#fff', // Item multi selected
        '--dropdown-list-background-100': '#1B1F26', // List dropdown
        '--dropdown-list-font-100': '#fff', // List dropdown font
        '--dropdown-list-border-100': '#3f4b5b', // List dropdown border
        '--dropdown-list-active-background-100': '#323843', // List dropdown border
        '--dropdown-list-active-font-100': '#fff', // List dropdown border

        // Footer
        '--footer-background-100': '#1B1F26', // List dropdown border
        '--footer-border-100': '#3f4b5b', // List dropdown border
        '--footer-font-100': '#CCCCCC', // List dropdown border

        // Modais
        '--modal-background-100': '#00000099', // Background modais
        '--modal-background-content-100': '#272C35', // Background content modais
        
        // Dialog
        '--dialog-header-info-background-100': '#3B67F2', // Background header info dialog
        '--dialog-header-info-font-100': '#fff', // Font header info dialog
        '--dialog-header-success-background-100': '#1eb600', // Background header success dialog
        '--dialog-header-success-font-100': '#fff', // Font header success dialog
        '--dialog-header-warning-background-100': '#ff9966', // Background header warning dialog
        '--dialog-header-warning-font-100': '#fff', // Font header warning dialog
        '--dialog-header-danger-background-100': '#dc3545', // Background header danger dialog
        '--dialog-header-danger-font-100': '#fff', // Font header danger dialog
        '--dialog-body-background-100': '#1B1F26', // Background body dialog
        '--dialog-body-font-100': '#CCCCCC', // Font body dialog
        '--dialog-list-errors-background-100': '#272C35', // Background list error dialog
        '--dialog-list-errors-border-100': '#3f4b5b', // Border list error dialog
        '--dialog-list-errors-font-100': '#CCCCCC', // Font list error dialog

        // Cards warnign
        '--card-warning-background-100': '#1B1F26', // Background header info dialog
        '--card-warning-font-100': '#CCCCCC', // Background header info dialog
        '--card-warning-border-100': '#3f4b5b', // Background header info dialog
        
        // Notificacoes
        '--notification-font-100': '#CCCCCC', // Font title
        '--notification-font-200': '#8C8C8C', // Font description
        '--notification-font-300': '#fff', // Font icons
        '--notification-background-100': '#1B1F26', // Background
        '--notification-success-100': '#1eb600', // Background success
        '--notification-success-light-100': '#1eb60050', // Background success light
        '--notification-info-100': '#3B67F2', // Background info light
        '--notification-info-light-100': '#3B67F250', // Background info light
        '--notification-danger-100': '#dc3545', // Background danger light
        '--notification-danger-light-100': '#dc354550', // Background danger light
        '--notification-warning-100': '#ff9966', // Background warning light
        '--notification-warning-light-100': '#ff996650', // Background warning light

        // Tag times
        '--time-remove-background-100': '#dc3545', // Background
        '--time-remove-font-100': '#fff', // Background
        '--time-available-background-100': '#1B1F26', // Background
        '--time-available-font-100': '#3B67F2', // Background
        '--time-available-border-100': '#3B67F2', // Background
        '--time-checked-background-100': '#3B67F2', // Background
        '--time-checked-font-100': '#fff', // Background
        '--time-checked-border-100': '#3B67F2', // Background
        '--time-day-offbackground-100': '#dddddd10', // Background
        '--time-day-offfont-100': '#dddddd', // Background
        '--time-day-offborder-100': '#dddddd10', // Background
        '--time-off-background-100': '#dddddd10', // Background
        '--time-off-font-100': '#dddddd', // Background
        '--time-off-border-100': '#dddddd', // Background
        '--time-reserved-background-100': '#dc3545', // Background
        '--time-reserved-font-100': '#fff', // Background
        '--time-reserved-border-100': '#dc3545', // Background
        '--time-pre-reserved-background-100': '#ff9966', // Background
        '--time-pre-reserved-font-100': '#fff', // Background
        '--time-pre-reserved-border-100': '#ff9966', // Background
        '--time-reserved-month-background-100': '#7120AC', // Background
        '--time-reserved-month-font-100': '#fff', // Background
        '--time-reserved-month-border-100': '#7120AC', // Background

        // Cards
        '--cards-background-100': '#1B1F26', // Background
        '--cards-border-100': '#3f4b5b', // Background
        '--cards-background-primary-100': '#3B67F2', // Primary
        '--cards-background-primary-200': '#3B67F210', // Primary
        '--cards-background-danger-100': '#dc3545', // Danger
        '--cards-background-warning-100': '#ff9966', // Warning
        '--cards-background-secondary-100': '#9f9f9f', // Secondary
        '--cards-background-success-100': '#1eb600', // Success
        '--cards-font-100': '#fff', // Background title
        '--cards-font-200': '#8C8C8C', // Background
        '--cards-font-300': '#fff', // Background

        // Tables
        '--table-header-font-100': '#fff', // Font header cards
        '--table-header-border-100': '#3f4b5b', // Border header cards
        '--table-header-background-100': '#323843', // Background header cards
        '--table-row-font-100': '#8C8C8C', // Background header cards
        '--table-row-border-100': '#3f4b5b', // Border header cards
        '--table-row-background-100': '#1B1F26', // Background header cards
    }
};
