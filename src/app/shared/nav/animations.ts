import {
  animate,
  query,
  sequence,
  stagger,
  style,
  transition,
  trigger
} from "@angular/animations";

export const MenuAnimation = trigger("menu", [
  transition(":enter", [
    style({ height: 0, overflow: "hidden" }),
    query(".menu-item", [
      style({ opacity: 0, transform: "translateY(-50px)" })
    ]),
    sequence([
      animate("200ms", style({ height: "*" })),
      query(".menu-item", [
        stagger(-50, [
          animate("400ms ease", style({ opacity: 1, transform: "none" }))
        ])
      ]),
    ])
  ]),

  transition(":leave", [
    style({ height: "*", overflow: "hidden" }),
    query(".menu-item", [style({ opacity: 1, transform: "none" })]),
    sequence([
      query(".menu-item", [
        stagger(50, [
          animate(
            "400ms ease",
            style({ opacity: 0, transform: "translateY(-50px)" })
          )
        ])
      ]),
      animate("200ms", style({ height: 0 }))
    ])
  ])
]);

export const MenuLemonAnimation = trigger("lemon", [
  transition(":enter", [
    style({ opacity: 0, right: "-80px" }),
    sequence([
      animate(
        "400ms ease",
        style({ opacity: 1, right: "-15px" })
      )
    ])
  ]),

  transition(":leave", [
    style({ opacity: 1, right: "-15px" }),
    sequence([
      animate(
        "400ms ease",
        style({ opacity: 0, right: "-80px" })
      )
    ])
  ])
])