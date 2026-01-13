<script lang="ts" module>
    export interface Props {
        /** Icon name in format "collection:icon" (e.g., "lucide:home", "mdi:account") */
        name: string
        /** Icon size (width and height) */
        size?: number | string
        /** Icon color */
        color?: string
        /** Horizontal flip */
        flipH?: boolean
        /** Vertical flip */
        flipV?: boolean
        /** Rotation in degrees (0, 90, 180, 270) */
        rotate?: 0 | 90 | 180 | 270
        /** Additional CSS classes */
        class?: string
    }
</script>

<script lang="ts">
    import Icon from '@iconify/svelte'

    let {
        name,
        size = '1em',
        color,
        flipH = false,
        flipV = false,
        rotate = 0,
        class: className = ''
    }: Props = $props()

    const flip = $derived(
        flipH && flipV
            ? 'horizontal,vertical'
            : flipH
              ? 'horizontal'
              : flipV
                ? 'vertical'
                : undefined
    )

    const rotateValue = $derived(rotate === 0 ? undefined : rotate / 90)
</script>

<Icon
    icon={name}
    width={size}
    height={size}
    {color}
    {flip}
    rotate={rotateValue}
    class="shrink-0 {className}"
/>
